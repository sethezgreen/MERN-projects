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
    },
    
    // Read One
    findAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((author) => {
                res.status(200).json(author)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Update Author
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then((updatedAuthor) => {
                res.json(updatedAuthor)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Delete Author
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}