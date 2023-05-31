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

// eslint-disable-next-line new-cap
@Service()
// eslint-disable-next-line require-jsdoc
export class GroceryListRepository implements IGroceryListRepository {
  addOne = async (name: string): Promise<IGroceryItem> => {
    const groceryItem = new GroceryItem({ name });
    return await groceryItem.save();
  };

  getAll = async (): Promise<IGroceryItem[]> => {
    return await GroceryItem.find();
  };

  update = async (id: unknown, changes: UpdateQuery<IGroceryItem>) => {
    const groceryItem = await GroceryItem.findByIdAndUpdate(
      { _id: id },
      changes,
      {
        new: true,
      }
    );
    return groceryItem as IGroceryItem;
  };
}
