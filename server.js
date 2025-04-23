const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
