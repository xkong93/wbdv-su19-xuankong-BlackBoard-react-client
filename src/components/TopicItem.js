import React from "react";

const TopicItem = ({ topic,deleteTopic, params}) => (
  <li className="nav-item">
    <a className={topic.id == params.topicId? 'nav-link active' : ''}
     href={`/courses/${params.courseId}/modules/${params.moduleId}/lessons/${topic.lessonId}/topics/${topic.id}`}>
      {topic.title}
    </a>
    <i  onClick={()=>deleteTopic(topic.id)} className="fa fa-trash pull-right" />
    <i className="fa fa-pencil pull-right" aria-hidden="true"></i>
  </li>
)

export default TopicItem;
