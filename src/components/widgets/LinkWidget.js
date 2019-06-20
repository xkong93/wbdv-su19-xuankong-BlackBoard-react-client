import React from 'react'

const LinkWidget = ({widget, preview, updateWidget}) => {
    return (
        <div className="border">

            <div hidden={preview}>
                <h1>Link Widget</h1>

                <div className="form-group">
                    <label for="Link">Link Path</label>

                    <input id="Link" className="form-control" defaultValue={widget.href} placeholder="Link URL"
                           onChange={(event) => updateWidget({...widget, src: event.target.value})}/>

                </div>

                <div className="form-group">
                    <label for="LinkText">Link Text</label>

                    <input id="LinkText" className="form-control" placeholder="Link Text"
                           onChange={(event) => updateWidget({...widget, text: event.target.value})}
                    />
                </div>
                <h3>Preview</h3>
                <div className="form-group">
                    <label for="LinkWidgetName">Widget Name</label>

                    <input id="LinkWidgetName" className="form-control" placeholder={widget.name}
                           onChange={(event) => updateWidget({...widget, name: event.target.value})}
                    />
                </div>
                <h3>Preview</h3>

            </div>

            <div>

                <a href={widget.src}>{widget.text}</a>
            </div>
        </div>
    )
}

export default LinkWidget