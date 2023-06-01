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

  it("Add one to shopping list", async () => {
    const item = await groceryListRepository.addOne("test1");

    expect(item).toBeInstanceOf(GroceryItem);
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
