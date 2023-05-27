import { Schema, model, Types } from "mongoose";

export interface IGroceryItem {
  name: string;
  purchased: boolean;
  _id: Types.ObjectId;
}

const groceryItemSchema = new Schema<IGroceryItem>({
  name: { type: String, required: true, unique: true },
  purchased: { type: Boolean, default: false },
});

export const GroceryItem = model<IGroceryItem>("Grocery", groceryItemSchema);
