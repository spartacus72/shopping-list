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
    logger.info("purchase a grocery item");

    const { id } = req.params;

    const groceryItem = await GroceryItem.findByIdAndUpdate(
      { _id: id },
      { purchased: true },
      {
        new: true,
      }
    );

    res.send(groceryItem as IGroceryItem);
  } catch (error) {
    next(error);
  }
};
