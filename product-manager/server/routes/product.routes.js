const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api/createProduct', ProductController.createProduct)
    app.get('/api/products', ProductController.findAllProducts)
    app.get('/api/product/:id', ProductController.findOneProduct)
    app.patch('/api/edit/:id', ProductController.updateProduct)
    app.delete('/api/delete/:id', ProductController.deleteProduct)
}