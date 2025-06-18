const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userProxyRoutes = require('./routes/user.proxy.routes');
const authProxyRoutes = require('./routes/auth.proxy.route');
const restaurantProxyRoutes = require('./routes/restaurant.proxy.routes');
const orderProxyRoutes = require('./routes/order.proxy.route');

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/users', userProxyRoutes);
app.use('/api/v1/auth', authProxyRoutes);
app.use('/api/v1/restaurant', restaurantProxyRoutes);
app.use('/api/v1/order', orderProxyRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
