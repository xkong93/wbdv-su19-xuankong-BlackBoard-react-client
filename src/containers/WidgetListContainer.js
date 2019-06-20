import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from "react-redux";
import WidgetService from "../services/WidgetService"

const service = WidgetService.getInstance();

const stateToPropMapper = state => {
    return {
        widgets: state.widgets,
        preview: state.preview
    };
};

const propsToDispatcher = dispatch => (
    {
        loadWidgets: () => {
            service
                .findAllWidgets()
                .then(widgets => dispatch({
                    type: "FIND_ALL_WIDGETS",
                    widgets: widgets
                }));
        },
        updateWidget: (widget) => {

            service
                .updateWidget(widget.id, widget)
                .then(service
                    .findAllWidgets()
                    .then(widgets => dispatch({
                        type: "UPDATE_WIDGET",
                        widgets: widgets
                    })))


        },
        deleteWidget: (widget) => {
            service
                .deleteWidget(widget.id)
                .then(service
                    .findAllWidgets()
                    .then(widgets => dispatch({
                        type: "DELETE_WIDGET",
                        widgets: widgets
                    })))
        },
        createWidget: () => {
            let newWidget =
                {
                    id: (new Date()).getTime(),
                    type: 'HEADING',
                    name: 'New Widget',
                    size: '1',
                    text: "heading demo",
                    src: "",
                    order: "1"
                }

            service
                .createWidget(newWidget)
                .then(service
                    .findAllWidgets()
                    .then(widgets => dispatch({
                        type: "CREATE_WIDGET",
                        widgets: widgets
                    })));

        },

        moveWidgetUp: (widget) => {
            dispatch({
                type: "Move_Up",
                widget: widget
            })
        },
        moveWidgetDown: (widget) => {
            dispatch({
                type: "Move_Down",
                widget: widget
            })
        },
        findWidget: (wid) => {
            dispatch({
                type: "FIND_WIDGET",
                widgetId: wid
            })
        },
        findAllWidgets: () => {
            dispatch({
                type: "FIND_ALL_WIDGET",
            })
        },
        previewMode: () => {
            dispatch({
                type: "PREVIEW",
            })
        }

    });

const WidgetListContainer = connect(
    stateToPropMapper,
    propsToDispatcher
)(WidgetListComponent);

export default WidgetListContainer;
