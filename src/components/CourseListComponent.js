import React from 'react'
import CourseRow from './CourseRow'
//take array of coursese
const CourseListComponent = ({courses,deleteRow}) =>
    
// return following thing but no need to add return (). single element 
    <div className="container">

            {
                courses.map(course =>
                    <CourseRow  course={course} deleteRow={deleteRow}/>
                 )
            }

    </div>

export default CourseListComponent