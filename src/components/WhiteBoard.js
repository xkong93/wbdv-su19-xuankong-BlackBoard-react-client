import React from "react";
import CourseListContainer from "../containers/CourseListContainer";
// npm install react-router-dom --save
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CourseEditorContainer from "../containers/CourseEditorContainer";

class WhiteBoard extends React.Component {
  render() {
    return (
        
      <Router>

        <div>
          <Link to="/courses">courses</Link>
          <Route exact={true} path="/courses" component={CourseListContainer} />

          <Route
            path="/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
            component={CourseEditorContainer}
          />
        </div>
      
      </Router>
    );
  }
}

export default WhiteBoard;
