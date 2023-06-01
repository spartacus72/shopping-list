import { Service } from "typedi";
import { GroceryItem, IGroceryItem } from "../../models/groceryModel";
import { Request, Response, NextFunction } from "express";
import {IGroceryListController} from "../groceryListController";

@Service()
export default class GroceryListController implements IGroceryListController {
  async addOne(
    req: Request,
    res: Response<IGroceryItem>,
    next: NextFunction
  ): Promise<void> {
    res.send(new GroceryItem({}));
  }

  async getAll(
    _req: Request,
    res: Response<IGroceryItem[]>,
    next: NextFunction
  ): Promise<void> {}

  async purchaseOne(
    req: Request,
    res: Response<IGroceryItem>,
    next: NextFunction
  ): Promise<void> {}
}
