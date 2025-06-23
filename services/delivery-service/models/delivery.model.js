const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  deliveryPerson: {
    type: String,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  deliveryLocation: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "picked_up", "on_the_way", "delivered", "cancelled"],
    default: "pending",
  },
  estimatedArrivalTime: {
    type: Date,
  },
  actualDeliveryTime: {
    type: Date,
  },
  locationUpdates: [
    {
      lat: Number,
      lng: Number,
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model("Delivery", deliverySchema);
