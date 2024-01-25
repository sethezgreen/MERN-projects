const Author = require('../models/author.model')

module.exports = {
    // Create Author
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                res.status(201).json(newAuthor)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Read All
    findAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthors) => {
                res.status(200).json(allAuthors)
            })
            .catch((err) => {
                res.status(200).json(err)
            })
    }
}