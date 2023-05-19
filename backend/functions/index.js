"use strict";
const mongoose = require("mongoose");
const { initializeApp } = require("firebase-admin/app");
const dotenv = require("dotenv");

initializeApp();

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));

exports.grocerylist = require("./src/functions/grocery-list");

