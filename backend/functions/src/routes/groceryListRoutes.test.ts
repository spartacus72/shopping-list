import { jest, describe, expect, it, beforeEach } from "@jest/globals";
import GroceryListRoutes from "./groceryListRoutes";
import { Express } from "express";
import { Container } from "typedi";

jest.mock("../controllers/groceryListController");

describe("Grocery list routes tests", () => {
  let groceryListRoutes: GroceryListRoutes;
  let app: Express;

  beforeEach(() => {
    groceryListRoutes = Container.get(GroceryListRoutes);
    app = groceryListRoutes.app;
  });

  it("app is defined", async () => {
    expect(app).toBeDefined();
  });

  it("true is true", async () => {
    expect(app).toBeDefined();
    expect(true).toBe(true);
  });
});
