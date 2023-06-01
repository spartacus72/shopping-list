import { Service } from "typedi";
import { GroceryItem, IGroceryItem } from "../../models/groceryModel";
import { UpdateQuery } from "mongoose";
import { IGroceryListRepository } from "../groceryListRepository";

@Service()
export class GroceryListRepository implements IGroceryListRepository {
  async addOne(name: string): Promise<IGroceryItem> {
    return new GroceryItem();
  }

  async getAll(): Promise<IGroceryItem[]> {
    return new Array<IGroceryItem>();
  }

  async update(
    id: unknown,
    changes: UpdateQuery<IGroceryItem>
  ): Promise<IGroceryItem> {
    return new GroceryItem({});
  }
}
