const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem", 
        required: [true, "Menu item is required"],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is not provided"],
        min: 1
    }
});

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "User Id is required"],
        trim: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: [true, "Restaurant Id is required"],
        trim: true
    },
    items: [orderItemSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", orderSchema);
