const mongoose = require('mongoose')

async function connect(req, res, next) {
    try{
        await mongoose.connect('mongodb://127.0.0.1/my_database')
    } catch(error) {
        next(error)
    }
}

module.exports = {connect}
