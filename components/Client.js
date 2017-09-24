import React from 'react';

function Client(props) {
    return (
        <div className="client">
            <p>dog name: {props.dogName}</p>
            <p>human name: {props.humanName}</p>
            <p>address: {props.address}</p>
            <p>email: {props.email}</p>
            <p>phone: {props.phone}</p>
            <img id="displayImage" src={props.pic} alt="Upload a picture!" />
        </div>
    );
}

export default Client;