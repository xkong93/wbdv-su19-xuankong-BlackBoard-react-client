import React from 'react'
import CourseEditorComponent from '../components/CourseEditorComponent'
import CourseService from '../services/CourseService'
import LessonService from '../services/LessonService'
import TopicService from '../services/TopicService'
import WidgetService from '../services/WidgetService'
import CourseEditorNavBar from '../components/CourseEditorNavBar';

export default class CourseEditorContainer
    extends React.Component {
    constructor(props) {
        super(props)
        //??/

        this.courseService = CourseService.getInstance()
        this.lessonService = LessonService.getInstance()
        this.topicService = TopicService.getInstance()
        // this.widgetService = WidgetService.getInstance()

        this.state = {
            courses: [],
            modules: [],
            lessons: [],
            topics: [],
            // widgets: []
        }
    }

    componentDidMount() {
        const courseId = this.props.match.params.courseId;
        // const moduleId = this.props.match.params.moduleId;
        // const lessonId = this.props.match.params.lessonId;
        // const topicId = this.props.match.params.topicId;
        this.courseService.findCourseById(courseId)
            .then(courses => this.setState({
                courses: courses,
            }))
        //  // this.moduleService.findAllModuleForCourseById(courseId)
        //  //     .then(modules => this.setState({
        //  //         modules:modules
        //  //     }))
        //
        //  this.lessonService.findAllLessonForModuleById(moduleId)
        //      .then(lessons => this.setState({
        //          lessons: lessons
        //      }))
        //
        //  this.topicService.findAllTopicForLessonById(lessonId)
        //      .then(topics => this.setState({
        //          topics:topics
        //      }))
        //  // this.widgetService.findAllWidgetsForTopicById(topicId)
        //  //     .then(widgets=> this.setState({
        //  //         widgets:widgets
        //  //     }))


    }

    render() {
        return (
            <div className="container">
                <CourseEditorNavBar title={this.state.courses.title}/>
                <CourseEditorComponent
                    courses={this.state.courses}
                    modules={this.state.modules}
                    lessons={this.state.lessons}
                    topics={this.state.topics}
                    params={this.props.match.params}/>
            </div>
        )
    }
}