const express = require("express");
const router = express.Router();
const Book = require("../models/books");

// POST Method - Create a new book
router.post("/", (req, res) => {
  book = new Book({
    name: req.body.name,
    author: {
      name: req.body.author,
      age: req.body.age,
    },
    genre: req.body.genre,
  });

  book
    .save()
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      res.status(500).send({
        message: "books was not stored in the db",
      });
    });
});

module.exports = router;
