"use strict";
import { logger } from "firebase-functions";
import GroceryModel from "../../models/groceryModel";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  logger.info("purchase a grocery item");

  try {
    const { id } = req.params;

    const groceryItem = await GroceryModel.findByIdAndUpdate(
      { _id: id },
      { purchased: true }
    );

    res.send(groceryItem);
  } catch (err) {
    const error = err as Error;
    const { code, details } = JSON.parse(JSON.stringify(error));
    logger.error("An error has occured.", code, details);

    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};
