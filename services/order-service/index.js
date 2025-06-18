const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/order.routes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/v1/order", orderRoutes);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
 