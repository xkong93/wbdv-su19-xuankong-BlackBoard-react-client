import React from "react";

const LessonItem = ({ lesson,deleteLesson,params}) => 
  <li className="nav-item">
    <a className={lesson.id == params.lessonId? 'nav-link active' : ''} href={`/courses/${params.courseId}/modules/${params.moduleId}/lessons/${lesson.id}/topics/${params.topicId}`}>
      {lesson.title}
    </a>
    <i  onClick={()=>deleteLesson(lesson.id)} className="fa fa-trash pull-right" />
    <i className="fa fa-pencil pull-right" aria-hidden="true"></i>

  </li>



export default LessonItem;
