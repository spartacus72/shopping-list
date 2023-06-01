/* eslint-disable require-jsdoc */
import { Service } from "typedi";
import { GroceryItem, IGroceryItem } from "../../models/groceryModel";
import { IGroceryListService } from "../groceryListService";

const groceryItem = new GroceryItem({
  name: "item1",
  purchased: false,
  _id: Date.now,
});

@Service()
export default class GroceryListService implements IGroceryListService {
  async addOne(name: string): Promise<IGroceryItem> {
    return groceryItem;
  }

  async getAll(): Promise<IGroceryItem[]> {
    return [groceryItem];
  }

  async purchaseOne(id: unknown): Promise<IGroceryItem> {
    return new GroceryItem({
      ...groceryItem,
      purchased: true,
    });
  }
}
