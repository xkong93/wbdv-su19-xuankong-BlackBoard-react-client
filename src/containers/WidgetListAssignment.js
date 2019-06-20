import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import widgetReducer from '../reducers/widgetReducer'
import WidgetListContainer from "../containers/WidgetListContainer";

// reducer => state => store => provider => container => map to props => components

const store = createStore(widgetReducer)

export default class WidgetListAssignment extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <WidgetListContainer/>
            </Provider>
        )
    }
}