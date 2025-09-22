const siteRouter = require('./site')

function routes(app) {
    app.use('/', siteRouter)
}

module.exports = routes
