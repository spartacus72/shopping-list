import { Service } from "typedi";
import { GroceryItem, IGroceryItem } from "../models/groceryModel";
import { UpdateQuery } from "mongoose";

export interface IGroceryListRepository {
  addOne(name: string): Promise<IGroceryItem>;
  getAll(): Promise<IGroceryItem[]>;
  update(
    id: unknown,
    changes: UpdateQuery<IGroceryItem>
  ): Promise<IGroceryItem>;
}

@Service()
export class GroceryListRepository implements IGroceryListRepository {
  async addOne(name: string): Promise<IGroceryItem> {
    const groceryItem = new GroceryItem({ name });
    return await groceryItem.save();
  }

  async getAll(): Promise<IGroceryItem[]> {
    return await GroceryItem.find();
  }

  async update(
    id: unknown,
    changes: UpdateQuery<IGroceryItem>
  ): Promise<IGroceryItem> {
    const groceryItem = await GroceryItem.findByIdAndUpdate(
      { _id: id },
      changes,
      {
        new: true,
      }
    );
    return groceryItem as IGroceryItem;
  }
}
