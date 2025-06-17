const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    address: {
        type: String,
        required: true,
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
    ownerId: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
