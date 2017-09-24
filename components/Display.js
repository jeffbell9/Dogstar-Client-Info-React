import React from 'react';

import Client from './Client';

function Display(props) { 
    return (
        <div id="show">
            {props.clients.map(function(client, index) {
                return (
                    <Client
                        dogName = {client.dogName}
                        humanName = {client.humanName}
                        address = {client.address}
                        email = {client.email}
                        phone = {client.phone}
                        pic = {client.photoURL}
                        key = {client._id} />
                )
            }.bind(this))}
        </div>
    )
}

export default Display;