"use strict";
import { logger } from "firebase-functions";
import GroceryModel from "../../models/groceryModel";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  logger.info("get all grocery items");

  try {
    res.send(await GroceryModel.find());
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
