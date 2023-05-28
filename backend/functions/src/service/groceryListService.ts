import { IGroceryItem, GroceryItem } from "../models/groceryModel";

const addOne = async (name: string) => {
  const groceryItem = new GroceryItem({ name });
  return await groceryItem.save();
};

const getAll = async () => {
  return await GroceryItem.find();
};

const purchaseOne = async (id: any) => {
  const groceryItem = await GroceryItem.findByIdAndUpdate(
    { _id: id },
    { purchased: true },
    {
      new: true,
    }
  );
  return groceryItem as IGroceryItem;
};

export { addOne, getAll, purchaseOne };
