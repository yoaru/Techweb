const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/techlearn', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
