const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurant.controller");

router.get("/", controller.getAllRestaurants);
router.get("/:id", controller.getRestaurantById);
router.post("/", controller.createRestaurant);
router.put("/:id", controller.updateRestaurant);
router.delete("/:id", controller.deleteRestaurant);

router.post("/:id/menu", controller.addMenuItem);
router.get("/:id/menu", controller.getMenuItems);
router.put("/menu/:item_id", controller.updateMenuItem);
router.delete("/menu/:item_id", controller.deleteMenuItem);

module.exports = router;
