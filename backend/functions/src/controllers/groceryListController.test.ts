import { jest, describe, expect, it, beforeAll } from "@jest/globals";
import GroceryListController from "./groceryListController";
import { Container } from "typedi";

jest.mock("../service/groceryListService");

describe("Grocery list routes tests", () => {
  let groceryListController: GroceryListController;

  beforeAll(() => {
    groceryListController = Container.get(GroceryListController);
  });

  it("grocery list controller is defined", async () => {
    expect(groceryListController).toBeDefined();
  });

  it("true is true", async () => {
    expect(true).toBe(true);
  });
});
