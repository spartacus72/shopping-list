/*
import * as mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { describe, expect, beforeAll, afterAll, it } from "@jest/globals";
import { GroceryItem } from "../models/groceryModel";
import { addOne, getAll, purchaseOne } from "../service/groceryListService";

describe("Data model tests", () => {
  let con: mongoose.Mongoose;
  let mongoServer: MongoMemoryServer;

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
    const item = await addOne("test1");

    expect(item).toBeInstanceOf(GroceryItem);
  });

  it("Should get all shopping list", async () => {
    await addOne("test2");
    const list = await getAll();

    expect(list.length).toBeGreaterThan(0);
  });

  it("Should purchase item", async () => {
    const item = addOne("test3");
    const updatedItem = await purchaseOne((await item).id);

    expect(updatedItem.purchased).toBe(true);
  });

  // eslint-disable-next-line max-len
  // it("Grocery model requires name property to be set by user", async () => {
  //   const groceryItem = new GroceryItem({});

  //   expect(async () => {
  //     await groceryItem.save();
  //   }).rejects.toThrowError();
  // });

  // // eslint-disable-next-line max-len
  // it("Mongoose schema defaults purchased and populates _id", async () => {
  //   const groceryItem = new GroceryItem({ name: "eggs" });

  //   const savedGroceryItem = await groceryItem.save();

  //   expect(savedGroceryItem.name).toBe("eggs");
  //   expect(savedGroceryItem.purchased).toBe(false);
  //   expect(savedGroceryItem._id).toBeDefined();
  // });
});
*/