/* eslint-disable require-jsdoc */
import { IGroceryItem } from "../models/groceryModel";
import { Service } from "typedi";
import { GroceryListRepository } from "../repositories/groceryListRepository";

export interface IGroceryListService {
  addOne(name: string): Promise<IGroceryItem>;
  getAll(): Promise<IGroceryItem[]>;
  purchaseOne(id: number): Promise<IGroceryItem>;
}

// eslint-disable-next-line new-cap
@Service()
export class GroceryListService implements IGroceryListService {
  constructor(public groceryListRepo: GroceryListRepository) {}

  /**
   * add a single grocery item.
   * @param {string} name The name of the new item.
   * @return {Promise<IGroceryItem>} The newly created grocery item.
   */
  addOne = async (name: string): Promise<IGroceryItem> => {
    return await this.groceryListRepo.addOne(name);
  };

  /**
   * return all grovery items.
   * @return {Promise<IGroceryItem[]>} All grocery items.
   */
  getAll = async (): Promise<IGroceryItem[]> => {
    return await this.groceryListRepo.getAll();
  };

  /**
   * mark one item as purchased.
   * @param {number} id The id of the purchased item.
   * @return {Promise<IGroceryItem>} The updated grocery item.
   */
  purchaseOne = async (id: number): Promise<IGroceryItem> => {
    return await this.groceryListRepo.update(id, { purchased: true });
  };
}
