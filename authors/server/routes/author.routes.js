const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.post('/api/createAuthor', AuthorController.createAuthor)
    app.get('/api/authors', AuthorController.findAllAuthors)
}