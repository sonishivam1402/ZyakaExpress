const Restaurant = require("../models/restaurant.model");
const MenuItem = require("../models/menuItems.model");

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
  try {
    const menuItems = await MenuItem.findOne({ "restaurantId": req.params.id });

    if (menuItems) {
      return res.status(400).json({ error: "Cannot delete restaurant with existing menu items" });
    }

    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deletedRestaurant) return res.status(404).json({ error: "Restaurant not found" });

    res.json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};


// Add menu item
exports.addMenuItem = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });

  const newMenu = new MenuItem(req.body);
  await newMenu.save();
  res.status(201).json(newMenu);
};

// Get all menu items
exports.getMenuItems = async (req, res) => {
  const menu = await MenuItem.find({ "restaurantId": req.params.id });
  if (!menu) return res.status(404).json({ error: "Menu not found" });

  res.json(menu);
};

// Update menu item
exports.updateMenuItem = async (req, res) => {
  const updated = await MenuItem.findByIdAndUpdate(req.params.item_id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: "Menu Item not found" });
  res.json(updated);
};

// Delete menu item
exports.deleteMenuItem = async (req, res) => {
  const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.item_id);
  if (!deletedMenuItem) return res.status(404).json({ error: "Menu Item not found" });

  res.json({ message: "Menu Item deleted successfully" });
};
