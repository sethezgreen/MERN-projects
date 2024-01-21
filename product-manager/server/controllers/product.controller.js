const Product = require('../models/product.model') // model import

module.exports = {
    // Create Product
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.status(201).json(newProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Find All
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => {
                res.status(200).json(allProducts)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Find one
    findOneProduct: (req, res) => {
        Product.findOne({_id:req.params.id})
            .then((product) => {
                res.status(200).json(product)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}