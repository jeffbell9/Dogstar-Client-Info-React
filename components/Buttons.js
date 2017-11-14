import React from 'react';

const Buttons = props => {
    return (
        <div className="buttons">
            <button id="enter" type="submit" formEncType="multipart/form-data" form="inputForm">Submit</button>

            <p id="deleteInfo">Use human name and dog name to delete client</p> 
            
            <button id="deleteClient" type="button" onClick={props.onDelete}>delete client</button>
            {/*<button id="displayClient" type="button" onClick={props.onDisplay}>display client</button>
            <button id="displayAll" type="button" onClick={props.onDisplayAll}>display all</button>*/}                                       
        </div>
    );
}

export default Buttons;