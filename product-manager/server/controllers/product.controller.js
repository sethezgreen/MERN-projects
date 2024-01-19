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
    }
}