import React from 'react';
import { Link } from 'react-router-dom';

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
            <div id="clientWrapper" className="container">
                <audio id="audio" src="/audio/single-dog-bark.wav"></audio>
                <div className="row">
                    <div className="col-6 offset-1">
                        <div id="clientDogName"><h1>{props.clients[index].dogName}</h1></div>
                        <div id="clientInfo">
                            <h2>{props.clients[index].humanName}</h2>
                            <h3>{props.clients[index].address}</h3>
                            <h3>{props.clients[index].email}</h3>
                            <h3>{props.clients[index].phone}</h3>
                        </div>
                        <p className="return"><Link to="/" onMouseDown={playAudio}>back to dog pack</Link></p>
                    </div>
                    <div className="col-5">
                        <div id="clientDogPic"><img src={props.clients[index].photoURL} className="img-fluid" /></div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ClientPage;