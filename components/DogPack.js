import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import DogPackPic from './DogPackPic';

const DogPack = props => {
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
        <div id="homeWrapper">
            <div id="dogPack">

                <span id="add"><Link to="/form">add/update/delete a client</Link></span>

                {/*<p><Link to="/display">Display</Link></p>*/}
            </div>

            <div id="wrapper">
                <h1 id="dogPackTitle">Dogstar Dog Pack</h1>
                <h3 id="goToClient">Click on pack member for client info</h3>
                <audio id="audio" src="/audio/single-dog-bark.wav"></audio>
                <ul>
                    {props.clients.map((client, index) => {
                        return (
                            <li key={client._id} ><Link to={`/client/${index}`} onMouseDown={playAudio}><DogPackPic pic={client.photoURL} /><p id="dogName">{client.dogName}</p></Link></li>
                    )})}
                </ul>
            </div>
        </div>
    )
}

export default DogPack;