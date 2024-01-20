const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api/createProduct', ProductController.createProduct)
    app.get('/api/products', ProductController.findAllProducts)
}