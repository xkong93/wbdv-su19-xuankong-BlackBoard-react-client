
export default class WidgetService {
    static myInstance = null;

    url = 'http://localhost:8080/api/topic/';
    url2 = 'http://localhost:8080/api/widget/';

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance = new WidgetService()
        }
        return this.myInstance
    }

    createWidget = (topicId,widget) => {
        // widgets.push(widget)
        return fetch(this.url + topicId + '/' + 'widget' , {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => response.json())
    }

    findAllWidgetsForTopicById = (topicId) => {
        return fetch(this.url + topicId + '/' + 'widget')
            .then(response => response.json())        // return widgets
    }


    findWidgetById = (widgetId) => {
        return fetch(this.url2 + '/' + widgetId)
            .then(response => response.json());
    }

    updateWidget = (widgetId, newWidget) => {
        return fetch(this.url2 +  + widgetId, {
            method: "PUT",
            body: JSON.stringify(newWidget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());

    }

    deleteWidget = (widgetId) => {
        return fetch(this.url2  + widgetId,{
            method:"DELETE"
        }) //.then(response => response.json()); no need then but need return
        // widgets = widgets.filter(widget => widget.id != widgetId);
    }
}



