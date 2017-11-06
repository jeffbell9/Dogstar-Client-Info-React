import React from 'react';

const DogPackPic = props => {
    return (
        <div>
            <img src={props.pic} className="img-fluid" alt="Upload a picture!" />
            <p id="dogName">{props.dogName}</p>
        </div>
    )
}

export default DogPackPic;