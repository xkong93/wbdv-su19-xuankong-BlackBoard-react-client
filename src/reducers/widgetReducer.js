import WidgetService from '../services/WidgetService'
// reducer => state => store => provider => container => map to props => components

const widgetReducer = (state = {widgets: [],preview : false}, action) => {
    if (action.type === 'DELETE_WIDGET') {
        return {
            widgets:action.widgets
        }
    } else if (action.type === 'CREATE_WIDGET') {
        return {
            widgets:action.widgets
        }
    } else if (action.type === 'UPDATE_WIDGET') {
        return {
            widgets: action.widgets
        }

    }else if(action.type === "Move_Down"){
        return {
            widgets:newDownWidgets(action.widget,state.widgets)
        }
    }else if(action.type === "Move_Up"){
        return {
            widgets:newUpWidgets(action.widget,state.widgets)
        }
    }else if (action.type === "FIND_WIDGET"){
        return {
            widget:state.widgets.find( widget => widget.id == action.wid)
        }
    }else if (action.type === "FIND_ALL_WIDGET"){
        return {
            widgets:[...state.widgets]
        }
    }else if (action.type === "PREVIEW"){
        // console.log(log"preview")
        // let newState = Object.assign({}, state)
        // newState.preview = !newState.preview
        // return newState
        return {
          widgets: state.widgets,
          preview: !state.preview
        }
    }else if (action.type === "FIND_ALL_WIDGETS"){
        return {
            widgets:action.widgets
        }
    }
    return state;
}

var newDownWidgets = (targetWidget,widgets) => {
    let newArr = [...widgets]
    if(newArr.length  < 2){
        return newArr
    }
    for (var i = 0; i < newArr.length; i++){
        if(targetWidget.id === newArr[i].id && i < newArr.length - 1){
            var tempWidget = newArr[i + 1]
            newArr[i + 1] = newArr[i];
            newArr[i] = tempWidget;
            break; //once it is found, it needs to break
        }
    }
    return newArr
}

var newUpWidgets = (targetWidget,widgets) => {
    let newArr = [...widgets]
    if(newArr.length  < 2){
        return newArr
    }
    for (var i = 0; i < newArr.length; i++){
        if(targetWidget.id === newArr[i].id && i > 0){
            var tempWidget = newArr[i - 1]
            newArr[i - 1] = newArr[i];
            newArr[i] = tempWidget;
            break; //once it is found, it needs to break
        }
    }
    return newArr
}

export default widgetReducer