const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  available: Boolean,
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  }
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
