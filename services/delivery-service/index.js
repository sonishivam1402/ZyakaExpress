const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const deliveryRoutes = require("./routes/delivery.routes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/v1/delivery", deliveryRoutes);

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Delivery Service running on port ${PORT}`);
});
 