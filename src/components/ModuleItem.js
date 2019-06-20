import React from "react";

const ModuleList = ({module, deleteModule, editModule, params}) => (
    <li className={module.id == params.moduleId ? "list-group-item active" : "list-group-item"}>
        <a style={{"color": module.id == params.moduleId ? 'white' : 'black'}}
           href={`/courses/${params.courseId}/modules/${params.moduleId}/lessons/${params.lessonId}/topics/${params.topicId}`}>
            {module.title}
        </a>
        <i onClick={() => editModule(module.id)} className="fa fa-trash pull-right"/>
        <i className="fa fa-pencil pull-right" aria-hidden="true"></i>
    </li>
);

export default ModuleList;
