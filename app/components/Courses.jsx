import React from "react";
import Link from "next/link";

// async function fetchCourses() {
//   const res = await fetch("http:localhost:3000/api/courses");
//   const courses = await res.json();
//   return courses;
// }

const Courses = ({ courses }) => {
//   const courses = await fetchCourses();

  const data = courses.map((course) => (
    <div className="card" key={course.id}>
      {course.title}
      <h2>{course.level}</h2>
      <small>Level: {course.level}</small>
      <p>{course.description}</p>
      <Link className="btn" href={course.link} target="_blank">
        Go to course
      </Link>
    </div>
  ));

  return <div className="courses">{data}</div>;
};

export default Courses;
