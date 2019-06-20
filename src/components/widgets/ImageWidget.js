import React from 'react'

const ImageWidget = ({widget, preview, updateWidget}) => {
    return (
        <div className="border">
            <h1 hidden={preview}>Image Widget</h1>
            <div hidden={preview} className="form-group">
                <label for="ImageLink">Image Link</label>

                <input id="ImageLink" className="form-control" defaultValue={widget.src} placeholder={widget.src}
                       onChange={(e) => updateWidget({...widget, src: e.target.value})}/>
            </div>
            <div hidden={preview} className="form-group">
                <label for="Widget Name">Widget Name</label>

                <input id="Widget Name" className="form-control" placeholder={widget.name}
                       onChange={(event) => updateWidget({...widget, name: event.target.value})}
                />
                <h3>Preview</h3>

            </div>
            <img src={widget.src}/>
        </div>


    )

}
export default ImageWidget