import { Service, Inject } from "typedi";
import { IGroceryItem } from "../models/groceryModel";
import { Request, Response, NextFunction } from "express";
import { logger } from "firebase-functions";
import GroceryListService from "../service/groceryListService";

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
}

@Service()
export default class GroceryListController implements IGroceryListController {
  constructor(@Inject() private groceryListService: GroceryListService) {}

  async addOne(
    req: Request,
    res: Response<IGroceryItem>,
    next: NextFunction
  ): Promise<void> {
    try {
      logger.info("add a new grocery item");

      const { name } = req.body;
      res.send(await this.groceryListService.addOne(name));
    } catch (error) {
      next(error);
    }
  }

  async getAll(
    _req: Request,
    res: Response<IGroceryItem[]>,
    next: NextFunction
  ): Promise<void> {
    try {
      logger.info("get all grocery items");

      res.send(await this.groceryListService.getAll());
    } catch (error) {
      next(error);
    }
  }

  async purchaseOne(
    req: Request,
    res: Response<IGroceryItem>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      logger.info("purchase a grocery item", id);

      const groceryItem = await this.groceryListService.purchaseOne(id);

      res.send(groceryItem as IGroceryItem);
    } catch (error) {
      next(error);
    }
  }
}
