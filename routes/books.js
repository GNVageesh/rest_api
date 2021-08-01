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

// GET: Get all books
router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.send(books))
    .catch((err) => {
      res.status(500).send({ message: "Something went wrong" });
    });
});

// GET ONE: Get one book by ID
router.get("/:bookId", async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  if (!book) res.status(404).send({ message: "Book not found" });
  res.send(book);
});

// UPDATE: Update book based on ID
router.put("/:bookId", async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(
    req.params.bookId,
    {
      name: req.body.bname,
      author: {
        name: req.body.aname,
        age: req.body.age,
      },
      genre: req.body.genre,
    },
    { new: true }
  );

  if (!updatedBook) res.status(404).send({ message: "Book not found" });
  res.send(updatedBook);
});

// DELETE: Delete book on ID
router.delete("/:bookId", async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.bookId);
  if (!book) res.status(404).send({ message: "Book not found" });
  res.send({ success: "Deleted the book successfully" });
});

module.exports = router;
