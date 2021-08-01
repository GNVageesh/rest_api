const express = require("express");
const router = express.Router();
const { Book, validateBook } = require("../models/books");

// POST Method - Create a new book
router.post("/", async (req, res) => {
  const error = await validateBook(req.body);
  if (error.message) res.status(400).send(error);
  book = new Book({
    name: req.body.bname,
    author: {
      name: req.body.aname,
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
