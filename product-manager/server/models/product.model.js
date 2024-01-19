const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}

    // for created at and updated at
}, {timestamps:true})

module.exports = mongoose.model('Product', ProductSchema)