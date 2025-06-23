const Delivery = require("../models/delivery.model");

exports.getAllDeliveries = async (req, res) => {
    const deliveries = await Delivery.find();
    res.json(deliveries);
};

exports.getDeliveryById = async (req, res) => {
    const Delivery = await Delivery.findById(req.params.id);
    if (!Delivery) return res.status(404).json({ error: "Delivery not found" });
    res.json(Delivery);
};

exports.assign = async (req, res) => {
    const newDelivery = new Delivery(req.body);
    await newDelivery.save();
    res.status(201).json(newDelivery);
};

exports.updateDelivery = async (req, res) => {
  const updated = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: "Delivery not found" });
  res.json(updated);
};