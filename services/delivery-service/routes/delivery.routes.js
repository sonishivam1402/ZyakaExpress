const express = require("express");
const router = express.Router();
const controller = require("../controllers/delivery.controller");

router.get("/", controller.getAllDeliveries);
router.get("/:id", controller.getDeliveryById);
router.post("/", controller.assign);
router.put("/:id", controller.updateDelivery);

module.exports = router;