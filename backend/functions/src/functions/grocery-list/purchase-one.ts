"use strict";
import { logger } from "firebase-functions";
import { IGroceryItem } from "../../models/groceryModel";
import { Request, Response, NextFunction } from "express";
import { purchaseOne } from "../../service/groceryListService";

export default async (
  req: Request,
  res: Response<IGroceryItem>,
  next: NextFunction
) => {
  try {
    logger.info("purchase a grocery item");

    const { id } = req.params;

    const groceryItem = await purchaseOne(id);

    res.send(groceryItem as IGroceryItem);
  } catch (error) {
    next(error);
  }
};
