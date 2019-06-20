import React from 'react'


const HeadingWidget = ({widget, preview, updateWidget}) => {
    return (

        <div className="border">
            <h1 hidden={preview} >Heading Widget</h1>
            <div hidden={preview} className="form-group">
                {console.log("sdsds")}
                            {console.log(widget.id)}

                <label for="HeadingText">Heading Text</label>

                <input id="HeadingText" class="form-control" placeholder="Heading Text"
                       onChange={(event) => updateWidget({...widget, text: event.target.value})} // key point
                />
            </div>

            <div hidden={preview} className="form-group">

                <label for="HeadingStyle">Heading Style</label>

                <select id="HeadingStyle" className="form-control"
                        onChange={(event) => updateWidget({...widget, size: event.target.value})}
                        value={widget.size}>
                    >
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                    <option value="5">Heading 5</option>
                </select>
            </div>

            <div hidden={preview} className="form-group">
                <label for="WidgetName">Widget Name</label>

                <input id="WidgetName" className="form-control" placeholder={widget.name}
                       onChange={(event) => updateWidget({...widget, name: event.target.value})}
                />
                <h4>Preview</h4>

            </div>
            {widget.size === "1" && <h1>{widget.text}</h1>}
            {widget.size === "2" && <h2>{widget.text}</h2>}
            {widget.size === "3" && <h3>{widget.text}</h3>}
            {widget.size === "4" && <h4>{widget.text}</h4>}
            {widget.size === "5" && <h5>{widget.text}</h5>}
        </div>
    )
}


export default HeadingWidget

