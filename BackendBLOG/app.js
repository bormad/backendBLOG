require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const port = 3001;
const app = express();

app.use(express.static("../frontend/build"));

app.use(cookieParser());
app.use(express.json());

app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://admin:123@cluster0.wpnqajf.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  });
