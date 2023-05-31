import { Service } from "typedi";
import { IGroceryItem } from "../models/groceryModel";
import { Request, Response, NextFunction } from "express";
import { logger } from "firebase-functions";
import { GroceryListService } from "../service/groceryListService";

export interface IGroceryListController {
  addOne(
    req: Request,
    res: Response<IGroceryItem>,
    next: NextFunction
  ): Promise<void>;
  getAll(
    _req: Request,
    res: Response<IGroceryItem[]>,
    next: NextFunction
  ): Promise<void>;
  purchaseOne(
    req: Request,
    res: Response<IGroceryItem>,
    next: NextFunction
  ): Promise<void>;
};

@Service()
export class GroceryListController implements IGroceryListController {
  constructor(public groceryListService: GroceryListService) {}

  addOne = async (
    req: Request,
    res: Response<IGroceryItem>,
    next: NextFunction
  ): Promise<void> => {
    try {
      logger.info("add a new grocery item");

      const { name } = req.body;
      res.send(await this.groceryListService.addOne(name));
    } catch (error) {
      next(error);
    }
  };

  getAll = async (
    _req: Request,
    res: Response<IGroceryItem[]>,
    next: NextFunction
  ): Promise<void> => {
    try {
      logger.info("get all grocery items");

      res.send(await this.groceryListService.getAll());
    } catch (error) {
      next(error);
    }
  };

  purchaseOne = async (
    req: Request,
    res: Response<IGroceryItem>,
    next: NextFunction
  ): Promise<void> => {
    try {
      logger.info("purchase a grocery item");

      const { id } = req.params;

      const groceryItem = await this.groceryListService.purchaseOne(Number(id));

      res.send(groceryItem as IGroceryItem);
    } catch (error) {
      next(error);
    }
  };
}
