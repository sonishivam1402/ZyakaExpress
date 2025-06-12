const Restaurant = require("../models/restaurant.model");

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
};

// Get single restaurant
exports.getRestaurantById = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });
  res.json(restaurant);
};

// Create new restaurant
exports.createRestaurant = async (req, res) => {
  const newRestaurant = new Restaurant(req.body);
  await newRestaurant.save();
  res.status(201).json(newRestaurant);
};

// Update restaurant
exports.updateRestaurant = async (req, res) => {
  const updated = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: "Restaurant not found" });
  res.json(updated);
};

// Delete restaurant
exports.deleteRestaurant = async (req, res) => {
  const deleted = await Restaurant.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Restaurant not found" });
  res.json({ message: "Deleted successfully" });
};

// Add menu item
exports.addMenuItem = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });

  restaurant.menu.push(req.body);
  await restaurant.save();
  res.status(201).json(restaurant);
};

// Get all menu items
exports.getMenuItems = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });

  res.json(restaurant.menu);
};

// Update menu item
exports.updateMenuItem = async (req, res) => {
  const restaurant = await Restaurant.findOne({ "menu._id": req.params.item_id });
  if (!restaurant) return res.status(404).json({ error: "Menu item not found" });

  const item = restaurant.menu.id(req.params.item_id);
  Object.assign(item, req.body);
  await restaurant.save();
  res.json(item);
};

// Delete menu item
exports.deleteMenuItem = async (req, res) => {
  const restaurant = await Restaurant.findOne({ "menu._id": req.params.item_id });
  if (!restaurant) return res.status(404).json({ error: "Menu item not found" });

  restaurant.menu.id(req.params.item_id).remove();
  await restaurant.save();
  res.json({ message: "Menu item deleted" });
};
