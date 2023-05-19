const { Schema, model } = require("mongoose");

const grocerySchema = Schema({
  name: String,
  purchased: Number,
});

module.exports = model("Grocery", grocerySchema);
