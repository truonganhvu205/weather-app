const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema

mongoose.plugin(slug)

const Test = new Schema({
    name: {type: String,},
    description: {type: String,},
    slug: {type: String, slug: 'name', slug_padding_size: 4,  unique: true},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Test', Test)
