"use strict";
import { logger } from "firebase-functions";
import { IGroceryItem } from "../../models/groceryModel";
import { Request, Response, NextFunction } from "express";
import { addOne } from "../../service/groceryListService";

export default async (
  req: Request,
  res: Response<IGroceryItem>,
  next: NextFunction
) => {
  try {
    logger.info("add a new grocery item");

    const { name } = req.body;
    res.send(await addOne(name));
  } catch (error) {
    next(error);
  }
};
