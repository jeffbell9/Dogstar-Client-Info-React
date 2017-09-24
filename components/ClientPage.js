import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const ClientPage = props => {
    let index = props.match.params.index;

    const playAudio = () => {
        const audio = document.getElementById("audio");
        audio.play()
        .then(() => {
            console.log("Woof!");
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <div>
            <div id="clientWrapper">
                <audio id="audio" src="/audio/single-dog-bark.wav"></audio>
                <div id="clientDogName"><h1>{props.clients[index].dogName}</h1></div>
                <div id="clientDogPic"><img src={props.clients[index].photoURL} /></div>
                <div id="clientInfo">
                    <h2>{props.clients[index].humanName}</h2>
                    <h3>{props.clients[index].address}</h3>
                    <h3>{props.clients[index].email}</h3>
                    <h3>{props.clients[index].phone}</h3>
                </div>

                <p className="return"><Link to="/" onMouseDown={playAudio}>back to dog pack</Link></p>
            </div>
        </div> 
    )
}

export default ClientPage;