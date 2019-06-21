import React from 'react'
import ModuleListContainer from '../containers/ModuleListContainer'
import LessonTabsContainer from '../containers/LessonTabsContainer'
import WidgetListAssignment from '../containers/WidgetListAssignment' 
const CourseEditorComponent = ({courses, modules, lessons,topics,params}) =>
<div>
    <div className="row">
        <div className="col-3">
            <ModuleListContainer
                courses={courses}
                modules={modules}
                params={params}
                />
        </div>

        <div className="col-9">
            <LessonTabsContainer
                courses={courses}
                lessons={lessons}
                topics={topics}
                params={params}
                />
        <WidgetListAssignment
            params={params}
        />


        </div>

    </div>
</div>

export default CourseEditorComponent;  