"use strict";
import { logger } from "firebase-functions";
import { IGroceryItem, GroceryItem } from "../../models/groceryModel";
import { Request, Response, NextFunction } from "express";

export default async (
  _req: Request,
  res: Response<IGroceryItem[]>,
  next: NextFunction
) => {
  try {
    logger.info("get all grocery items");

    res.send(await GroceryItem.find());
  } catch (error) {
    next(error);
  }
};
