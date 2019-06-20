import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

// ({widgets, preview, previewMode, deleteWidget, createWidget, updateWidget, moveWidgetDown, moveWidgetUp})

class WidgetListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.loadWidgets();
        // console.log(this.props.widgets)
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-row justify-content-end">
                    <button onClick={() => this.props.previewMode()} className="btn btn-warning">Preview</button>
                </div>
                {
                       this.props.widgets.map(widget =>
                        <div key={widget.id}>
                            <div className="flex-lg-row float-right">
                        <span hidden={this.props.preview}><i onClick={() => this.props.moveWidgetDown(widget)}
                                                             class="arrow fa fa-chevron-down"></i></span>
                                <span hidden={this.props.preview}><i onClick={() => this.props.moveWidgetUp(widget)}
                                                                     class="arrow fa fa-chevron-up"></i></span>
                                <select hidden={this.props.preview}
                                        onChange={(event) => this.props.updateWidget(({
                                            ...widget,
                                            type: event.target.value
                                        }))} // pass back an obj
                                        value={widget.type}>
                                    <option value="HEADING">Heading</option>
                                    <option value="PARAGRAPH">Paragraph</option>
                                    <option value="IMAGE">Image</option>
                                    <option value="LIST">List</option>
                                    <option value="LINK">Link</option>
                                </select>

                                <button hidden={this.props.preview} className="btn btn-danger"
                                        onClick={() => this.props.deleteWidget(widget)}>
                                    Delete
                                </button>
                            </div>
                            {
                                widget.type === 'HEADING' &&
                                <HeadingWidget widget={widget} updateWidget={this.props.updateWidget}
                                               preview={this.props.preview}/>
                            }
                            {
                                widget.type === 'PARAGRAPH' &&
                                <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget}
                                                 preview={this.props.preview}/>
                            }
                            {
                                widget.type === 'LINK' &&
                                <LinkWidget widget={widget} updateWidget={this.props.updateWidget}
                                            preview={this.props.preview}/>
                            }
                            {
                                widget.type === 'LIST' &&
                                <ListWidget widget={widget} updateWidget={this.props.updateWidget}
                                            preview={this.props.preview}/>
                            }
                            {
                                widget.type === 'IMAGE' &&
                                <ImageWidget widget={widget} updateWidget={this.props.updateWidget}
                                             preview={this.props.preview}/>
                            }
                        </div>
                    )

                }
                <div className="pull-right mt-2">
                    <button className="btn btn-success" onClick={this.props.createWidget}>
                        Add
                    </button>
                </div>
            </div>
        )
    }

}

export default WidgetListComponent