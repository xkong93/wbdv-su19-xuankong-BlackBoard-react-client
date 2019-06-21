import React from 'react'
import ModuleListComponent from '../components/ModuleListComponent'

export default class ModuleListContainer extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     course: this.props.course,
        //     modules : this.props.modules
        //
        // }

    }
    render() {
        return(
            <ModuleListComponent
                course={this.props.courses}
                modules={this.props.modules}
                params={this.props.params}
                />
        )
    }
}