const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));


