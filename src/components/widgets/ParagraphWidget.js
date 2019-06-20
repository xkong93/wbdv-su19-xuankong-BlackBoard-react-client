import React from 'react'

const ParagraphWidget = ({widget, preview, updateWidget}) =>
    <div className="border">
        <h1 hidden={preview}>Paragraph Widget</h1>
        <div hidden={preview} className="form-group">
            <label for="Paragraph">Paragraph Text</label>

            <textarea id="Paragraph" className="form-control"
                      defaultValue={widget.text}
                      onChange={(e) => updateWidget({...widget, text: e.target.value})}
                      placeholder="Paragraph text"></textarea>
        </div>

        <div hidden={preview} className="form-group">
                    <label for="ParaName">Widget Name</label>

            <input id="ParaName" className="form-control" placeholder={widget.name}
                   onChange={(event) => updateWidget({...widget, name: event.target.value})}
            />
                    <h3>Preview</h3>

        </div>

        <p>
            {widget.text}
        </p>
    </div>

export default ParagraphWidget