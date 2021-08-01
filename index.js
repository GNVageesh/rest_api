const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const booksRoute = require("./routes/books");

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/books/add", booksRoute);

// connect to mongoDB
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to your DB 🙌");
  })
  .catch((err) => console.log("Error: ", err));

// Start server
app.listen(PORT, () => {
  console.log("[RUNNING]... Server is running at 3000 🚀");
});
