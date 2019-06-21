import React from "react";
import ModuleItem from "./ModuleItem";

const ModuleListComponent = ({courses,defaultModule, modules, params, titleChange, deleteModule, createModule}) => {


    return (
        <div>
            <ul className="list-group">

                <li className="list-group-item">
                    <input
                        onChange={(event) => titleChange(event)}
                        value={defaultModule.title}
                        className="form-control"
                    />
                    <button
                        onClick={() => createModule(courses.id,defaultModule)}
                        className="btn btn-primary btn-block ">
                        Add Module
                    </button>
                </li>
                {modules.map(module => (
                    <ModuleItem module={module}
                                deleteModule={deleteModule}
                                params={params}/>

                ))}
            </ul>
        </div>

    )

}


export default ModuleListComponent;




