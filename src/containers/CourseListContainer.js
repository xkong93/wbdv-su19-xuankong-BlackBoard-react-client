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
        };
        console.log(this.state.courses)
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

    deleteRow = (id) => {
        // this.setState({
        //     courses: this.state.courses.filter(course => course.id != id)
        // })
        this.courseService.deleteCourse(id)
            .then(this.courseService.findAllCourses()
                .then(courses => this.setState({
                    courses: courses
                })))
    }

    render() {
        return (
            <div>
                <NavBarAndTableHead changeView={this.onclickChangeView}/>
                {this.state.toggle ? <CourseGrid deleteRow={this.deleteRow} courses={this.state.courses}/> :
                    <CourseListComponent deleteRow={this.deleteRow}
                                         courses={this.state.courses}/>}
            </div>
        );
    }
}
