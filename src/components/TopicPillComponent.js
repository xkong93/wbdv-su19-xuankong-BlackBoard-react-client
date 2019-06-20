import React from "react";
import TopicItem from "./TopicItem";
export default class TopicPillComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {
        id: "-1",
        moduleId: "1",
        title: "new Topic"
      },
      topics: this.props.topics
    };
  }

  createTopic = () => {
    this.setState(
      (this.state.topics = [...this.state.topics, this.state.topic])
    );
  };

  titleChange = event => {
    var newId = new Date().getTime();
    this.setState({
      topic: {
        id: newId,
        lessonId: this.state.topic.lessonId,
        title: event.target.value
      }
    });
  };

  deleteTopic = (id) => {
    console.log(id);
    this.setState({
      topics: this.state.topics.filter(topic => topic.id != id)
    });
  };
  render() {
    return (
      <div>
        <ul class="nav nav-pills pt-2">
          {this.state.topics.map(topic => (
            <TopicItem topic={topic} deleteTopic={this.deleteTopic} params={this.props.params}/>
          ))}
          <li>
            <i
              onClick={this.createTopic}
              className="ml-2 fa fa-plus fa-1x d-block"
            />
            <input
              onChange={this.titleChange}
              value={this.state.topic.title}
              className="form-control"
            />
          </li>
        </ul>
      </div>
    );
  }
}
