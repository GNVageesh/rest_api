const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// connect to mongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
  console.log("Connected to your DB 🙌");
});

app.listen(PORT, () => {
  console.log("[RUNNING]... Server is running at 3000 🚀");
});
