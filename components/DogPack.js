import React from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <div id="dogPack">
                <h2 id="dogPackTitle">Dog Pack</h2>

                <span id="add"><Link to="/form">add/update a client</Link></span>

                {/*<p><Link to="/display">Display</Link></p>*/}

                <div id="goToClient">Click on pack member for client info &gt;</div>

                <div id="wrapper">
                    <audio id="audio" src="/audio/single-dog-bark.wav"></audio>
                    <ul>
                        {props.clients.map((client, index) => {
                            return (
                                <li key={client._id} ><Link to={`/client/${index}`} onMouseDown={playAudio}><DogPackPic pic={client.photoURL} /><p id="dogName">{client.dogName}</p></Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DogPack;