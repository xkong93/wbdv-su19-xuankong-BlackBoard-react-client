import React from 'react'
import ModuleListContainer from '../containers/ModuleListContainer'
import LessonTabsContainer from '../containers/LessonTabsContainer'
import WidgetListAssignment from '../containers/WidgetListAssignment' 
const CourseEditorComponent = ({course, modules, lessons,topics,params}) =>
<div>
    <div className="row">
        <div className="col-3">
            <ModuleListContainer
                course={course}
                modules={modules}
                params={params}
                />
        </div>
        <div className="col-9">
            <LessonTabsContainer
                course={course}
                lessons={lessons}
                topics={topics}
                params={params}
                />
        <WidgetListAssignment/>

        </div>

    </div>
</div>

export default CourseEditorComponent;  