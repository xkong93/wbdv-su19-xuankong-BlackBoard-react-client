import React from "react";
import CourseListComponent from "../components/CourseListComponent";
import CourseService from "../services/CourseService";
import NavBarAndTableHead from "../components/NavBarAndTableHeader";
import CourseGrid from "../components/CourseGrid";

export default class CourseListContainer extends React.Component {
    constructor(props) {
        super(props);

        //new an obj
        this.courseService = CourseService.getInstance();
        this.state = {
            courses: [],
            toggle: false,
            course:{
                title:"New Course",
                owner:"me",
                modifiedDate:"Today"

            }
        };
        this.onclickChangeView = this.onclickChangeView.bind(this);
    }


    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => this.setState({
                courses: courses,
            }))
    }

    onclickChangeView() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    updateRow = (rid, newCourse) => {
        this.courseService.updateCourse(rid, newCourse)
            .then(() => this.courseService.findAllCourses().then(
                (modules) => this.setState({
                    modules: modules
                })))
    }

    createRow = (course) => {
        this.courseService.createCourse(this.state.course)
            .then(courses => this.setState({
                courses: courses
            }))
    }


    deleteRow = (id) => {
        this.courseService.deleteCourse(id)
            .then(() => this.courseService.findAllCourses()
                .then(courses => this.setState({
                    courses: courses
                })))
    }

    titleChange = (event) =>{
        this.setState({
            course:event.target.value
        })
    }


    render() {
        return (
            <div>
                <NavBarAndTableHead course={this.state.course} titleChange={this.titleChange}
                                    changeView={this.onclickChangeView} addCourse={this.createRow}/>
                {this.state.toggle ? <CourseGrid deleteRow={this.deleteRow} courses={this.state.courses}/> :
                    <CourseListComponent deleteRow={this.deleteRow}
                                         courses={this.state.courses}/>}
            </div>
        );
    }
}
