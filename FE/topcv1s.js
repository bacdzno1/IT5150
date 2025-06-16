var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var cors = require('cors')
var compression = require('compression')

var AppTopcv1s = express()

function configureApp(app) {
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')
    app.set('trust proxy', '127.0.0.1');
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

configureApp(AppTopcv1s)
var routerTopcv1s = require('./routers/topcv1s')
AppTopcv1s.use('/', routerTopcv1s)
errorApp(AppTopcv1s)

const PORT = process.env.PORT || 9020;
AppTopcv1s.listen(PORT, () => {
    console.log('Topcv1s app is running on port 9020: http://localhost:9020')
})