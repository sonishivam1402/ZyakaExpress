const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  cuisine: [String],
  rating: Number,
  ownerId: String,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
