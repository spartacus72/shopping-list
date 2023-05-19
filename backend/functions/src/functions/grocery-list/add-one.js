"use strict";
const functions = require("firebase-functions");
const groceryModel = require("../../models/groceryModel");

const logger = functions.logger;

module.exports = async (req, res) => {
  logger.info("add a new grocery item");

  try {
    const { name } = req.body;

    const groceryItem = new groceryModel({ name, purchased: false });

    const result = await groceryItem.save();

    res.send(result);
  } catch (err) {
    const { code, details } = JSON.parse(JSON.stringify(err));
    logger.error("An error has occured.", code, details);

    res.status(500).send({
      status: "error",
      message: err.message,
    });
  }
};
