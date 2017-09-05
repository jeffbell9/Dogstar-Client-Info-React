import React from 'react';

function Buttons(props) {
    return (
        <div className="buttons">
            <button id="enter" type="submit">add client</button>
            <button id="deleteClient" type="button" onClick={props.onDelete}>delete client</button>
            <button id="displayClient" type="button" onClick={props.onDisplay}>display client</button>
            <button id="displayAll" type="button" onClick={props.onDisplayAll}>display all</button>


            <p id="deleteInfo">Use human name to delete client and display client info</p>                                        
        </div>
    );
}

export default Buttons;