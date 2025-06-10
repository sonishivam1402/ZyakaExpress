const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const proxyRoutes = require('./routes/proxy.routes');

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/', proxyRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
