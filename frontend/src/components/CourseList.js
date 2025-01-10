import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseItem from './CourseItem';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from backend
    axios.get('/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses', error));
  }, []);

  return (
    <div>
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseItem key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
