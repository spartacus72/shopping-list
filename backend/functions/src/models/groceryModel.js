import { Schema, model } from "mongoose";

// eslint-disable-next-line new-cap
const grocerySchema = Schema({
  name: String,
  purchased: Number,
});

export default model("Grocery", grocerySchema);
