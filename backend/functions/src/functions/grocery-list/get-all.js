"use strict";
const functions = require("firebase-functions");
const groceryModel = require("../../models/groceryModel");

const logger = functions.logger;

module.exports = async (req, res) => {
  logger.info("get all grocery items");

  try {
    const groceryItems = await groceryModel.find();

    res.send(groceryItems);
  } catch (err) {
    const { code, details } = JSON.parse(JSON.stringify(err));
    logger.error("An error has occured.", code, details);

    res.status(500).send({
      status: "error",
      message: err.message,
    });
  }
};
