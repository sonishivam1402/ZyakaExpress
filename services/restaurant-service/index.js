const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const restaurantRoutes = require("./routes/restaurant.routes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/v1/restaurants", restaurantRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Restaurant Service running on port ${PORT}`);
});
 