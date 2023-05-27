"use strict";
import { logger } from "firebase-functions";
import { IGroceryItem, GroceryItem } from "../../models/groceryModel";
import { Request, Response, NextFunction } from "express";

export default async (
  req: Request,
  res: Response<IGroceryItem>,
  next: NextFunction
) => {
  try {
    logger.info("add a new grocery item");

    const { name } = req.body;

    const groceryItem = new GroceryItem({ name });

    res.send(await groceryItem.save());
  } catch (error) {
    next(error);
  }
};
