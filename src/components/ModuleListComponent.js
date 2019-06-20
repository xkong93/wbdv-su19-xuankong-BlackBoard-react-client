import React from "react";
import ModuleItem from "./ModuleItem";
export default class ModuleListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      module: {
        id: "-1",
        courseId: "123",
        title: "New Module"
      },
      modules: this.props.modules
    };
  }

  createModule = () => {
    //since this.props.modules is an array of objs, we use = instead of { this.props.modules :[this.state.module, ...this.props.modules] }
    // this.props is immutable so we need to set local state of props by giving it to modules
    this.setState(
      (this.state.modules = [...this.state.modules, this.state.module])
    );
    console.log(this.state.modules);
  };


  titleChange = (event) => {
    console.log(event.target.value)
    var newId = new Date().getTime();
    this.setState({
      module: {
        id: newId,
        courseId: this.state.module.courseId,
        title: event.target.value
      }
    });
  }
    
    deleteModule = (id) => {
        this.setState({
            modules:this.state.modules.filter(module => module.id != id)
        })
    }

    //to do edit module 
    editModule =(id) =>{
      console.log(id);
    }
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              onChange={this.titleChange}
              value={this.state.module.title}
              className="form-control"
            />
            <button
              onClick={this.createModule}
              className="btn btn-primary btn-block ">              
              Add Module
            </button>
          </li>
          {this.state.modules.map(module => (
            <ModuleItem  editModule={this.editModule} deleteModule={this.deleteModule}  module={module} params={this.props.params}/>
          ))}
        </ul>
      </div>
    );
  }
}
