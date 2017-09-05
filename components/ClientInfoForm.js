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
                        phone: ''
         };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleDisplayAll = this.handleDisplayAll.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

     handleSubmit(event) {
        event.preventDefault();

        if (this.state.humanName.length > 0) {
            let newClient = {
                dogName: this.state.dogName,
                humanName: this.state.humanName,
                address: this.state.address,
                email: this.state.email,
                phone: this.state.phone
            };

            this.props.add(newClient);
            this.setState({ dogName: '',
                            humanName: '',
                            address: '',
                            email: '',
                            phone: ''
            });
        } else {
            alert("human name and dog name are required");
        }
    }

    handleDelete() {
        if (this.state.humanName.length > 0) {
            this.props.delete(this.state.humanName);
            this.setState({ dogName: '',
                        humanName: '',
                        address: '',
                        email: '',
                        phone: ''
            });
        } else {
            alert("please use human name to delete information");
        }
    }

    handleDisplay() {
        if (this.state.humanName.length > 0) {
            this.props.display(this.state.humanName);
            this.setState({ dogName: '',
                        humanName: '',
                        address: '',
                        email: '',
                        phone: ''
            });
        } else {
            alert("please use human name to display information");
        }
    }

    handleDisplayAll() {
        this.props.displayAll();
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
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
                        </div>

                        <Buttons onDelete={this.handleDelete} onDisplay={this.handleDisplay} onDisplayAll={this.handleDisplayAll} />
                    </form>

                    <p className="return"><Link to="/">back to dog pack</Link></p>
                </div>
            </div>	
        );
    }
}