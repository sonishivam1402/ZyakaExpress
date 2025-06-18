const axios = require("axios");

const userServiceProxyHandler = async (req, res) => {
  const method = req.method.toLowerCase();
  try {
    console.log(`${process.env.USER_SERVICE_URL}${req.originalUrl}`);
    const response = await axios({
      method,
      url: `${process.env.USER_SERVICE_URL}${req.originalUrl}`,
      data: req.body,
      headers: {
        Authorization: `Bearer ${req.headers.authorization?.split(" ")[1]}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch the user data",
    });
  }
};

const authServiceProxyHandler = async (req, res) => {
  const method = req.method.toLowerCase();
  try {
    console.log(`${process.env.AUTH_SERVICE_URL}${req.originalUrl}`);
    const response = await axios({
      method,
      url: `${process.env.AUTH_SERVICE_URL}${req.originalUrl}`,
      data: req.body,
      headers: {
        Authorization: `Bearer ${req.headers.authorization?.split(" ")[1]}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to AUTHENTICATE the user",
    });
  }
};

const restaurantServiceProxyHandler = async (req, res) => {
  const method = req.method.toLowerCase();
  try {
    console.log(`${process.env.RESTAURANT_SERVICE_URL}${req.originalUrl}`);
    const response = await axios({
      method,
      url: `${process.env.RESTAURANT_SERVICE_URL}${req.originalUrl}`,
      data: req.body,
      headers: {
        Authorization: `Bearer ${req.headers.authorization?.split(" ")[1]}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch the restaurant data.",
    });
  }
};

const orderServiceProxyHandler = async (req, res) => {
  const method = req.method.toLowerCase();
  try{
   console.log(`${process.env.ORDER_SERVICE_URL}${req.originalUrl}`);
    const response = await axios({
      method,
      url: `${process.env.ORDER_SERVICE_URL}${req.originalUrl}`,
      data: req.body,
      headers: {
        Authorization: `Bearer ${req.headers.authorization?.split(" ")[1]}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch the orders data.",
    });
  }
};

module.exports = {
  userServiceProxyHandler,
  authServiceProxyHandler,
  restaurantServiceProxyHandler,
  orderServiceProxyHandler
};
