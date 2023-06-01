/* eslint-disable require-jsdoc */
import { IGroceryItem } from "../models/groceryModel";
import { Service, Inject } from "typedi";
import { GroceryListRepository } from "../repositories/groceryListRepository";

export interface IGroceryListService {
  addOne(name: string): Promise<IGroceryItem>;
  getAll(): Promise<IGroceryItem[]>;
  purchaseOne(id: unknown): Promise<IGroceryItem>;
}

@Service()
export default class GroceryListService implements IGroceryListService {
  constructor(@Inject() private groceryListRepo: GroceryListRepository) {}

  /**
   * add a single grocery item.
   * @param {string} name The name of the new item.
   * @return {Promise<IGroceryItem>} The newly created grocery item.
   */
  async addOne(name: string): Promise<IGroceryItem> {
    return await this.groceryListRepo.addOne(name);
  }

  /**
   * return all grovery items.
   * @return {Promise<IGroceryItem[]>} All grocery items.
   */
  async getAll(): Promise<IGroceryItem[]> {
    return await this.groceryListRepo.getAll();
  }

  /**
   * mark one item as purchased.
   * @param {number} id The id of the purchased item.
   * @return {Promise<IGroceryItem>} The updated grocery item.
   */
  async purchaseOne(id: unknown): Promise<IGroceryItem> {
    return await this.groceryListRepo.update(id, { purchased: true });
  }
}
