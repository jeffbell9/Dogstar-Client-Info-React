import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Buttons from './Buttons';

export default class ClientInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  dogName: '',
                        humanName: '',
                        address: '',
                        email: '',
                        phone: '',
                        photoURL: ''
         };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleDisplayAll = this.handleDisplayAll.bind(this);
    }

    handleInputChange(event) {
        if(event.target.name === "photo") {
            let imageFile = document.getElementById("photo");

            let value = imageFile.files[0].name;

            this.setState({
                photoURL: `/images/${this.state.dogName}.jpg`
            })
        } else {

            const target = event.target;
            let value = target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
        }
    }

     handleSubmit(event) {
        event.preventDefault();

        let picFile = document.getElementById("photo").files[0];

        if (this.state.humanName.length > 0 && this.state.dogName.length > 0) {

            let formData = new FormData();

            formData.append('dogName', this.state.dogName);
            formData.append('humanName', this.state.humanName);
            formData.append('address', this.state.address);
            formData.append('email', this.state.email);
            formData.append('phone', this.state.phone);
            formData.append('photoURL', this.state.photoURL);
            formData.append('photo', picFile, '/images/' + this.state.dogName + '.jpg');

            this.props.add(formData);
            this.setState({ dogName: '',
                            humanName: '',
                            address: '',
                            email: '',
                            phone: '',
                            photoURL: ''
            });
        } else {
            alert("human name and dog name are required");
        }
    }

    handleDelete() {
        if (this.state.humanName.length > 0 && this.state.dogName.length > 0) {
            this.props.delete(this.state.humanName, this.state.dogName);
            this.setState({ dogName: '',
                        humanName: '',
                        address: '',
                        email: '',
                        phone: '',
                        photoURL: ''
            });
        } else {
            alert("please use human name and dog name to delete information");
        }
    }

    handleDisplay() {
        if (this.state.humanName.length > 0) {
            this.props.display(this.state.humanName);
            this.setState({ dogName: '',
                        humanName: '',
                        address: '',
                        email: '',
                        phone: '',
                        photoURL: ''
            });
        } else {
            alert("please use human name to display information");
        }
    }

    handleDisplayAll() {
        this.props.displayAll();
    }

    playAudio() {
        let audio = document.getElementById("audio");
        audio.play()
        .then(() => {
            console.log("Woof!");
        })
        .catch((error) => {
            console.error(error);
        })
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form id="inputForm" name="inputForm" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                        <div className="info">
                            <label htmlFor="dogname">dog name</label>
                            <input type="text" name="dogName" value={this.state.dogName} onChange={this.handleInputChange} />

                            <label htmlFor="humanname">human name</label>
                            <input type="text" name="humanName" value={this.state.humanName} onChange={this.handleInputChange} />

                            <label htmlFor="address">address</label>
                            <input type="text" name="address" value={this.state.address} onChange={this.handleInputChange} />

                            <label htmlFor="email">email</label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}
                            />

                            <label htmlFor="phone">phone</label>
                            <input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} />

                            <label htmlFor="photo">photo</label>
                            <input type="file" id="photo" name="photo" accept="image/*" value={this.state.photo} onChange={this.handleInputChange}/>
                        </div>

                        <Buttons onDelete={this.handleDelete} onDisplay={this.handleDisplay} onDisplayAll={this.handleDisplayAll} />
                    </form>

                    <audio id="audio" src="/audio/single-dog-bark.wav"></audio>

                    <p className="return"><Link to="/" onMouseDown={this.playAudio}>back to dog pack</Link></p>
                </div>
            </div>	
        );
    }
}