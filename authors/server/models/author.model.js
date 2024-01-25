const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        min: [3, 'Author names must be at least 3 charaters.']
    }
}, {timestamps:true})

module.exports = mongoose.model('Author', AuthorSchema)