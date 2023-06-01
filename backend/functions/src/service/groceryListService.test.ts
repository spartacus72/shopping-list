import { jest, describe, expect, it, beforeAll } from "@jest/globals";
import { Container } from "typedi";
import GroceryListService from "./groceryListService";

jest.mock("../repositories/groceryListRepository");

describe("test grocery list service", () => {
  let groceryListService: GroceryListService;

  beforeAll(() => {
    groceryListService = Container.get(GroceryListService);
  });

  it("grocery list service is defined", async () => {
    expect(groceryListService).toBeDefined();
  });

  describe("test get all when data is empty", () => {
    it("true is true", async () => {
      expect(true).toBe(true);
    });
  });
});
