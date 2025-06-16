 
import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import compression from 'compression';
import DowloadRouter from "./routers/dowload_Route.js";
import UsersRouter from './routers/user_Route.js';
import NTDRouter from './routers/ntd_Route.js';
import CandiRouter from './routers/candi_Route.js';
import NewsRouter from './routers/new_Route.js';
import admin_Route from './routers/admin_Route.js';
import CVRouter from './routers/cv_Route.js'

const app = express();

function configureApp(app) {
    function shouldCompress(req, res) {
        if (req.headers['x-no-compression']) {
            return false
        }
        return compression.filter(req, res)
    }
    app.enable("trust proxy");

    app.set("view engine", "ejs");

    app.use(compression({ filter: shouldCompress }))
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: false, limit: '50mb' }));
    app.use(cookieParser());
    app.use(cors());
    app.use('/pictures', express.static('pictures'));
    app.use('/tmp', express.static('tmp'));
    app.use('/upload', express.static('upload'));
    app.use('/dowload', express.static('dowload'));
    app.use('/public', express.static('public'))
    app.use(function (err, req, res, next) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        res.status(err.status || 500);
        res.json({ 'error': err });
    });
}

function errorApp(app) {
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals+++, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        // res.render('error');
        res.json({ 'error': err });
    });
}
configureApp(app);

// Gộp tất cả router vào app
app.use('/api/topcv1s/user', UsersRouter);
app.use('/api/topcv1s/ntd', NTDRouter);
app.use('/api/topcv1s/candidate', CandiRouter);
app.use('/api/topcv1s/new', NewsRouter);
app.use('/download', DowloadRouter);
app.use('/api/topcv1s/CV', CVRouter);
app.use('/api/topcv1s/admin', admin_Route);

errorApp(app);
   
mongoose.connect("mongodb+srv://bacdzno1:narutohinata275@bacdz.m7quea5.mongodb.net/",
    {
        dbName: 'TopCV1s',
    }
).then(() => {
    console.log("Connected")
}).catch((err) => {
    console.log("Err when connect to database", err);
});
mongoose.connection.on('error', function () {
    console.log("Lỗi kết nối với Mongoose")
});
const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});