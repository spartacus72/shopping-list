"use strict";
import { logger } from "firebase-functions";
import { IGroceryItem } from "../../models/groceryModel";
import { Request, Response, NextFunction } from "express";
import { getAll } from "../../service/groceryListService";

export default async (
  _req: Request,
  res: Response<IGroceryItem[]>,
  next: NextFunction
) => {
  try {
    logger.info("get all grocery items");

    res.send(await getAll());
  } catch (error) {
    next(error);
  }
};
