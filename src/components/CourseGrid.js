import React from "react"
import CourseCard from "./CourseCard";


const CourseList = ({courses,deleteRow}) => 

    <div className="container">
        <div className="row">
        {

            courses.map(course =>
            <div className='col-xs-1 col-md-4 col-lg-2'>
            <CourseCard deleteRow={deleteRow} key={course.id} course ={course}/>
            </div>
            )
        }
        </div>
    </div>


export default CourseList