"use strict";
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const getAll = require("./get-all");
const addOne = require("./add-one");
const purchaseOne = require("./purchase-one");

const router = express.Router();

router.get("/", getAll);

router.post("/", addOne);

router.put("/:id", purchaseOne);

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(router);

module.exports = functions.https.onRequest(app);