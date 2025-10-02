// Vu Truong Anh
// truonganhvu205@gmail.com

const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const routes = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')

db.connect()

const app = express()
const port = 3000

app.use(morgan('combined'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: {
        windSpeedCompass: (value) => {
            const val = Math.floor((value / 22.5) + 0.5)
            const arr = ["N","NNE","NE","ENE","E","ESE","SE","SSE",
                        "S","SSW","SW","WSW","W","WNW","NW","NNW"]

            return arr[val % 16]
        },
        mConvertKm: value => {
            value/=1000
            return value.toFixed(1)
        },
    },
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(express.static(path.join(__dirname, 'public')))

routes(app)

app.listen(port)
