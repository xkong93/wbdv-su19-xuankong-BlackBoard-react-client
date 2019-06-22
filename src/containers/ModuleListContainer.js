import React from 'react'
import ModuleListComponent from '../components/ModuleListComponent'
import ModuleService from '../services/ModuleService'

export default class ModuleListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.moduleService = ModuleService.getInstance()

        this.state = {
            module: {
                title: "New Module"
            },
            modules: [],
        }

    }

    componentDidMount() {
        this.moduleService.findAllModuleForCourseById(this.props.params.courseId)
            .then(modules => this.setState({
                modules: modules
            }))

    }

    createModule = (courseId, module) => {
        this.moduleService.createModuleForCourseId(courseId, module)
            .then(modules => this.setState({
                modules: modules
            }))
    }

    deleteModule = (mid) => {
        this.moduleService.deleteModule(mid)
            .then(() =>
                this.moduleService.findAllModuleForCourseById(this.props.params.courseId)).then(
            (modules) => this.setState({
                modules: modules
            })
        )

    }

    updateModule = (mid) => {
        this.moduleService.updateModuleForCourseId(mid).then(() =>
            this.moduleService.findAllModuleForCourseById(this.props.params.courseId)).then(
            (modules) => this.setState({
                modules: modules
            })
        )
    }

    titleChange = (event) => {
        this.setState({
            module: {
                title: event.target.value
            }
        })
    }


    render() {
        return (
            <ModuleListComponent
                courses={this.props.courses}
                modules={this.state.modules}
                defaultModule={this.state.module}
                params={this.props.params}
                createModule={this.createModule}
                deleteModule={this.deleteModule}
                titleChange={this.titleChange}
            />
        )
    }
}