import React from "react";

const CourseCard = ({ course,deleteRow}) => (
  <div className="card" styles={{ width: "18rem" }}>
    <img className="card-img-top" src="https://picsum.photos/300/200" />
    <div className="card-body">
      <h5 className="card-title">{course.title}</h5>
      <p className="card-text text-left">Owner: {course.owner}</p>
      <p className="card-text">Modified: {course.ModifiedDate}</p>
      <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`} className="btn btn-primary">
        Edit
      </a>
      <a onClick={() => deleteRow(course.id)} className="btn btn-danger">
        Delete
      </a>
    </div>
  </div>
);

export default CourseCard;
