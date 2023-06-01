import * as mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { describe, expect, beforeAll, afterAll, it } from "@jest/globals";
import { GroceryItem } from "../models/groceryModel";
import { GroceryListRepository } from "../repositories/groceryListRepository";

describe("Grocery List Repository tests", () => {
  let con: mongoose.Mongoose;
  let mongoServer: MongoMemoryServer;
  let groceryListRepository = new GroceryListRepository();

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    con = await mongoose.connect(mongoServer.getUri(), {
      dbName: "verifyMASTER",
    });
  });

  afterAll(async () => {
    if (con) {
      await con.disconnect();
    }
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  it("returns an empty list of items", async () => {
    const list = await groceryListRepository.getAll();

    expect(list).toHaveLength(0);
  });

  it("throws validation error", async () => {
    const item = groceryListRepository.addOne("");

    await expect(item).rejects.toThrow("Grocery validation failed: name: Path `name` is required.");
  });

  it("Add one to shopping list", async () => {
    const item = await groceryListRepository.addOne("test1");

    expect(item).toBeInstanceOf(GroceryItem);
    expect(item).toHaveProperty("_id");
    expect(item.purchased).toBe(false);
  });

  it("Should get all shopping list", async () => {
    await groceryListRepository.addOne("test2");
    const list = await groceryListRepository.getAll();

    expect(list.length).toBeGreaterThan(0);
  });

  it("Should update item", async () => {
    const item = await groceryListRepository.addOne("test3");
    const updatedItem = await groceryListRepository.update(item._id, {
      purchased: true,
    });

    expect(updatedItem.purchased).toBe(true);
  });
});
