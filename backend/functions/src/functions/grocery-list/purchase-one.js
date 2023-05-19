"use strict";
const functions = require("firebase-functions");
const groceryModel = require("../../models/groceryModel");

const logger = functions.logger;

module.exports = async (req, res) => {
  logger.info("add a new grocery item");

  try {
    const { id } = req.params;

    const groceryItem = await groceryModel.findByIdAndUpdate({_id: id}, {purchased: true});

    res.send(groceryItem);
  } catch (err) {
    const { code, details } = JSON.parse(JSON.stringify(err));
    logger.error("An error has occured.", code, details);

    res.status(500).send({
      status: "error",
      message: err.message,
    });
  }
};
