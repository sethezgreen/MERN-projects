const authorController = require('../controllers/author.controller')
const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.post('/api/createAuthor', AuthorController.createAuthor)
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.get('/api/author/:id', AuthorController.findAuthor)
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor)
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}