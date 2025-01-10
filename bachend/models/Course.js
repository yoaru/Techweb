const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  instructor: { type: String },
  lessons: [{ type: String }],  // Example: ["Intro to Python", "Data Types"]
  category: { type: String, enum: ['Programming', 'Data Analysis', 'Web Development'], required: true },
  price: { type: Number, default: 0 },
});

module.exports = mongoose.model('Course', courseSchema);
