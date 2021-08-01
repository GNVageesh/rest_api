const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

// connect to mongoDB
mongoose
  .connect(
    "mongodb+srv://gnvageesh:vageeshgn123@cluster0.6lo1k.mongodb.net/booksdb?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to your DB 🙌");
  });

app.listen(PORT, () => {
  console.log("[RUNNING]... Server is running at 3000 🚀");
});
