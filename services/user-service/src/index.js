const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`User Service running at http://localhost:${PORT}`);
});
