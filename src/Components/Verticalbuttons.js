import React from 'react'
import './Verticalbutton.css'
const name="suSHAN";
export default function Verticalbuttons(props) {
    return (
        <div>
            <div className="mx-1">

            <div id='buttongroup'className="First group" role="toolbar" aria-label="Toolbar with button groups">
            <div className=" mx-1" role="group" aria-label="First group">
                <button type="button" className="btn btn-primary mx-1">one</button>
                <button type="button" className="btn btn-primary mx-1">Two</button>
                <button type="button" className="btn btn-primary mx-1">Three</button>
                <button type="button" className="btn btn-primary mx-1">Four</button>
            </div>
            <div className="mx-1 my-1" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary mx-1">Six</button>
                <button type="button" className="btn btn-secondary mx-1">Seven</button>
                <button type="button" className="btn btn-secondary mx-1">Eight</button>
            </div>
            <div className="mx-1 my-1" role="group" aria-label="Third group">
                <button type="button" className="btn btn-info  mx-1">Nine</button>
                <button type="button" className="btn btn-info  mx-1">Ten</button>
            </div>
            </div>
            <div id='text-group'  >
                <p>Hello this is </p><h1><code>{name}</code></h1>
                    <p>
                    live in <code>Dreamspace ...</code>
                    </p>

            </div>

            </div>
        </div>
    )
}
