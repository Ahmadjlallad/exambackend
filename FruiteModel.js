const mongoose = require("mongoose");
const FruitSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
  email: String,
});

module.exports = mongoose.model("Fruit", FruitSchema);
