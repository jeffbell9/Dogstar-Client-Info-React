import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';

import DogPackPic from './DogPackPic';
import ClientInfoForm from './ClientInfoForm';

export default class DogPack extends Component {
    constructor(props) {
        super(props);

        this.playAudio = this.playAudio.bind(this);
        this.imagePromises = this.imagePromises.bind(this);

        this.state = {
            loaded: false,
            error: false
        }
    }

    playAudio() {
        const audio = document.getElementById("audio");
        audio.play()
        .then(() => {
            console.log("Woof!");
        })
        .catch((error) => {
            console.error(error);
        })
    }

    imagePromises(pics) {
        Promise.all(pics).then(clients => {
            this.setState({
                loaded: true
            })

        }).catch(() => {
            this.setState({
                error: true
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.clients !== this.props.clients) {
            let picLoads = nextProps.clients.map((client) => {
                return new Promise((resolve, reject) => {
                    let img = new Image();
    
                    img.onload = () => resolve(client);
    
                    img.onerror = () => resolve(client);
    
                    img.src = client.photoURL;
                })
            })

            this.imagePromises(picLoads);
        }
    }

    componentDidMount() {
        if(this.props.clients.length !== 0) {
            this.setState({
                loaded: true
            })
        }
    }

    render() {
        if(this.state.error) {
            return <p>There was an error loading client images!</p>
        } else if(!this.state.loaded) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 id="dogPackTitle">Dogstar Dog Pack</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-11 offset-1">
                            <h3 id="goToClient">Click on pack member for client info</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <div id="dogPack">
                                <audio id="audio" src="/audio/single-dog-bark.wav"></audio>
                                <ul>
    
                                </ul>
                            </div>
                        </div>
                        <div className="col-5">
                            <div id="infoForm">
                                <h3 id="addUpdate">Add or update a client</h3>
                                <ClientInfoForm add={this.props.add} delete={this.props.delete} display={this.props.display} displayAll={this.props.displayAll} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 id="dogPackTitle">Dogstar Dog Pack</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 offset-1">
                        <h3 id="goToClient">Click on pack member for client info</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div id="dogPack">
                            <audio id="audio" src="/audio/single-dog-bark.wav"></audio>
                            <ul>
                                {this.props.clients.map((client, index) => {
                                    return (
                                        <li key={client._id} ><Link to={`/client/${index}`} onMouseDown={this.playAudio}><DogPackPic pic={client.photoURL} dogName={client.dogName} /></Link></li>
                                    )
                                        
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-5">
                        <div id="infoForm">
                            <h3 id="addUpdate">Add or update a client</h3>
                            <ClientInfoForm add={this.props.add} delete={this.props.delete} display={this.props.display} displayAll={this.props.displayAll} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}