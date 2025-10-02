const Test = require('../models/Test')
require('dotenv').config()

class SiteController {
    // GET /
    index(req, res, next) {
        const cityName = req.query.q ? req.query.q.toLowerCase() : ''
        const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`

        fetch(apiCall)
            .then(response => response.json())
            .then(data => res.render('home', {data}))
            .catch(next)
    }
}

module.exports = new SiteController()
