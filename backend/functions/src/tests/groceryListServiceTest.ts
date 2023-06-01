import * as mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { describe, expect, beforeAll, afterAll, it } from "@jest/globals";
import { GroceryItem, IGroceryItem } from "../models/groceryModel";
import { IGroceryListRepository } from "../repositories/groceryListRepository";

const groceryItems = [
  new GroceryItem({ name: "item 1", purchased: false, _id: 123435 }),
  new GroceryItem({ name: "item 2", purchased: false, _id: 123436 }),
];

class MockedGrocerListRepository implements IGroceryListRepository {
  addOne = async (name: string): Promise<IGroceryItem> => {
    const groceryItem = new GroceryItem({
      name,
      purchased: false,
      _id: 123435,
    });

    groceryItems.push(groceryItem);

    return groceryItem;
  };

  getAll = async (): Promise<IGroceryItem[]> => {
    return groceryItems;
  };

  update = async (id: unknown, changes: UpdateQuery<IGroceryItem>) => {
    const groceryItem = groceryItems.find(item => item._id === id);
  
    const newGroceryItem = new GroceryItem({
      ...groceryItem,
      changes,
    });

    groceryItems 
    return newGroceryItem;
  };
}

describe("Grocery List Service tests", () => {

  it("should return an empty list of items", async () => { });

  it("get all returns the correct list of items", async () => { });
  
  it("add one returns the new grocery item", async () => { });

  it("get all returns the updated list of items", async () => { });

  it("update returns the modified item", async () => { });

  it("get all returns the correct list of items", async () => { });
});
