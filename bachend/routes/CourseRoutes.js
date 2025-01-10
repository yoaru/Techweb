const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Fetch all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Fetch a specific course
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send('Course not found');
    res.json(course);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
