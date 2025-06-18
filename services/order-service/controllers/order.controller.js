const Order = require("../models/order.model");
require("../models/restaurant.model");
require("../models/menuItem.model");

// Get all orders
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

// Get single order
exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('restaurantId').populate('items.itemId');
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json(order);
};

// Create new Order
exports.createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).json(newOrder);
};

// Update Order
exports.updateOrder = async (req, res) => {
  const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: "Order not found" });
  res.json(updated);
};

// Delete Order
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ error: "Order not found" });

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
