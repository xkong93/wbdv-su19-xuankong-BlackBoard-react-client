import React from "react";
import LessonItem from "./LessonItem";
export default class LessonTabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: {
        id: "-1",
        moduleId: "1",
        title: "new Lesson"
      },
      lessons: this.props.lessons
    };
  }

  createLesson = () => {
    this.setState(
      (this.state.lessons = [...this.state.lessons, this.state.lesson])
    );
    console.log(this.state.lessons);
  };

  titleChange = (event) => {
    var newId = new Date().getTime();
    this.setState({
      lesson: {
        id: newId,
        moduleId: this.state.lesson.moduleId,
        title: event.target.value
      }
    });
  };

      deleteLesson = (id) => {
        this.setState({
            lessons:this.state.lessons.filter(lesson => lesson.id != id)
        })
    }
  render() {
    return (
      <div>
        <ul class="nav nav-tabs">
          {this.state.lessons.map(lesson => (
            <LessonItem lesson={lesson} deleteLesson={this.deleteLesson} params={this.props.params}/>
          ))}
          <li>
              <i
                onClick={this.createLesson}
                className="ml-2 fa fa-plus fa-1x d-block"
              />
              <input
                onChange={this.titleChange}
                value={this.state.lesson.title}
                className="form-control"
              />
          </li>
        </ul>
      </div>
    );
  }
}
