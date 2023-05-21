const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

// process.env.APP_NAME

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected successful!!"))
  .catch((err) => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine

app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup

// error handling

app.listen(process.env.PORT, () => {
  console.log(`App listening to ${process.env.PORT}`);
});
