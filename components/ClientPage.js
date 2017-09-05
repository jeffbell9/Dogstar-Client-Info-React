import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const ClientPage = props => {
    let index = props.match.params.index;

    return (
        <div>
            <div id="clientWrapper">
                <div id="clientDogName"><h1>{props.clients[index].dogName}</h1></div>
                <div id="clientDogPic"><img src={props.clients[index].photo} /></div>
                <div id="clientInfo">
                    <h2>{props.clients[index].humanName}</h2>
                    <h3>{props.clients[index].address}</h3>
                    <h3>{props.clients[index].email}</h3>
                    <h3>{props.clients[index].phone}</h3>
                </div>

                <p className="return"><Link to="/">back to dog pack</Link></p>
            </div>
        </div> 
    )
}

export default ClientPage;