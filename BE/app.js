 
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

const Users = express();
const NTD = express();
const Candi = express();
const New = express();
const dowload = express();
const Admin = express();
const CV = express()

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
    // app.use('/tmp', express.static('tmp'));
    app.use('/upload', express.static('upload'));
    app.use('/dowload', express.static('dowload'));
    // app.use('/public', express.static('public'))
    app.use(function (err, req, res) {
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
    app.use(function (err, req, res) {
        // set locals+++, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        // res.render('error');
        res.json({ 'error': err });
    });
}

configureApp(Users);
Users.use('/api/topcv1s/user', UsersRouter);
errorApp(Users);

configureApp(NTD);
NTD.use('/api/topcv1s/ntd', NTDRouter);
errorApp(NTD);

configureApp(Candi);
Candi.use('/api/topcv1s/candidate', CandiRouter);
errorApp(Candi);

configureApp(New);
New.use('/api/topcv1s/new', NewsRouter);
errorApp(New);

configureApp(dowload);
dowload.use('/download', DowloadRouter);
errorApp(dowload);

configureApp(CV);
CV.use('/api/topcv1s/CV', CVRouter);
errorApp(CV);

configureApp(Admin);
Admin.use('/api/topcv1s/admin', admin_Route);
errorApp(Admin);
   
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
    console.log("Lỗi try vấn")
});

Users.listen(3050, () => {
    console.log(`Users is running on port 3050`);
});

Users.on('error', (error) => {
    console.error('Error occurred while listening on Users port:3050', error);
});

NTD.listen(3051, () => {
    console.log(`NTD is running on port 3051`);
});

NTD.on('error', (error) => {
    console.error('Error occurred while listening on NTD port:3051', error);
});

Candi.listen(3052, () => {
    console.log(`Candi is running on port 3052`);
});

Candi.on('error', (error) => {
    console.error('Error occurred while listening on Candi port:3052', error);
});

New.listen(3053, () => {
    console.log(`New is running on port 3053`);
});

New.on('error', (error) => {
    console.error('Error occurred while listening on New port:3053', error);
});

dowload.listen(3055, () => {
    console.log(`Dowload is running on port 3055`);
});

dowload.on('error', (error) => {
    console.error('Error occurred while listening on dowload port:3055', error);
});

CV.listen(3056, () => {
    console.log(`Cv Candidate is running on port 3056`);
});

CV.on('error', (error) => {
    console.error('Error occurred while listening on Cv Candidate port:3056', error);
});

Admin.listen(3057, () => {
    console.log(`Admin is running on port 3057`);
});

Admin.on('error', (error) => {
    console.error('Error occurred while listening on Admin port:3057', error);
});