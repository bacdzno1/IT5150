var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var cors = require('cors')
var logger = require('morgan')
var compression = require('compression')
const rateLimit = require('express-rate-limit')

var AppViec3s = express()

function configureApp(app) {
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')
    // app.use(logger('dev'));
    // app.use(logger('combined'))
    app.set('trust proxy', '127.0.0.1');
    //   AppTimviec.use(express.json({ limit: '100mb' }))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false, limit: '10mb' }))
    app.use(cookieParser())
    app.use(cors())

    app.use(express.static(path.join(__dirname, 'public')));
    app.use((req, res, next) => {
        res.locals.currentUrl = req.originalUrl;
        next();
    });
    function shouldCompress(req, res) {
        if (req.headers['x-no-compression']) {
            return false
        }
        return compression.filter(req, res)
    }
    app.use(compression({ filter: shouldCompress }))

    app.use(function (err, req, res, next) {
        res.locals.message = err.message
        res.locals.error = req.app.get('env') === 'development' ? err : {}
        res.status(err.status || 500)
        res.render('error')
    })
}

function errorApp(app) {
    app.use(function (req, res, next) {
        next(createError(404))
    })
    app.use(function (err, req, res, next) {
        res.locals.message = err.message
        res.locals.error = req.app.get('env') === 'development' ? err : {}
        res.status(err.status || 500)
        res.render('error')
    })
}

// Cấu hình AppViec3s
configureApp(AppViec3s)
//AppViec3s.use(logger('combined'))
var routerViec3s = require('./routers/topcv1s')
AppViec3s.use('/', routerViec3s)
errorApp(AppViec3s)

AppViec3s.listen(9020, () => {
    console.log('Topcv1s app is running on port 9020: http://localhost:9020')
})