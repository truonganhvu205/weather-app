const Test = require('../models/Test')
require('dotenv').config()
const datetimeNow = require('../../utils/datetime')

class SiteController {
    // GET /
    index(req, res, next) {
        const cityName = req.query.q ? req.query.q.toLowerCase() : ''
        
        if(!cityName) {
            return res.render('home')
        }

        const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`

        fetch(apiCall)
            .then(response => response.json())
            .then(data => res.render('home', {data, datetimeNow}))
            .catch(next)
    }
}

module.exports = new SiteController()
