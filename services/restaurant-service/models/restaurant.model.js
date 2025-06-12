const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Menu Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    price: {
        type: Number,
        required: [true, 'Menu price is required'],
        min: [0, 'Price must be greater than 0'],
    },
    description: {
        type: String,
        minLength: 0,
        maxLength: 50,
    },
    available : {
        type: Boolean,
        required: true
    }
});

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Restaurant Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    address: {
        type: String,
        required: [true, 'Restaurant Address is required'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    cuisine: {
        type: [String],
        required: true,
        enum: ["Italian", "Fast Food", "Punjabi", "Chinese", "Gujarati", "Kathiyawadi"]
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    menu: [menuItemSchema],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
