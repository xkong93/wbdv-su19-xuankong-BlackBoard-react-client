
export default class WidgetService {
    static myInstance = null;

    url = 'https://fathomless-meadow-74479.herokuapp.com/api/widgets';

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance = new WidgetService()
        }
        return this.myInstance
    }

    createWidget = widget => {
        // widgets.push(widget)
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => response.json())
    }

    findAllWidgets = () => {
        return fetch(this.url).then((response) => response.json());
        // return widgets
    }


    findWidgetById = (widgetId) => {

        return fetch(this.url + '/' + widgetId)
            .then(response => response.json());
        // return widgets.find(widget => widget.id == widgetId)
    }

    updateWidget = (widgetId, newWidget) => {
        return fetch(this.url + '/' + widgetId, {
            method: "PUT",
            body: JSON.stringify(newWidget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
        // widgets = widgets.map(widget => widget.id == widgetId ? newWidget : widget)
    }

    deleteWidget = (widgetId) => {
        return fetch(this.url + '/' + widgetId,{
            method:"DELETE"
        }) //.then(response => response.json()); no need then but need return
        // widgets = widgets.filter(widget => widget.id != widgetId);
    }
}



