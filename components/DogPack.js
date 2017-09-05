import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import DogPackPic from './DogPackPic';

const DogPack = props => {
    return (
        <div>
            <div id="dogPack">
                <h2 id="dogPackTitle">Dog Pack</h2>

                <span id="add"><Link to="/form">add/delete a client</Link></span>

                <p><Link to="/display">Display</Link></p>

                <div id="wrapper">
                    <ul>
                        {props.clients.map((client, index) => {
                            return (
                                <li key={client._id} ><Link to={`/client/${index}`}><DogPackPic pic={client.photo} /><p id="dogName">{client.dogName}</p></Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DogPack;