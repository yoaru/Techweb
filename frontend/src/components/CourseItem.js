import React from 'react';

function CourseItem({ course }) {
  return (
    <div className="course-item">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button>Enroll</button>
    </div>
  );
}

export default CourseItem;
