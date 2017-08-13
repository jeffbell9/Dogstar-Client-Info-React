import React from 'react';
import axios from 'axios';

function Client(props) {
    return (
        <div className="client">
            <p>dog name: {props.dogName}</p>
            <p>human name: {props.humanName}</p>
            <p>address: {props.address}</p>
            <p>email: {props.email}</p>
            <p>phone: {props.phone}</p>
        </div>
    );
}

function Display(props) { 
        return (
            <div id="show">
                {props.clients.map(function(client, index) {
                    return (
                        <Client
                            dogName = {client.dogName}
                            humanName = {client.humanName}
                            address = {client.address}
                            email = {client.email}
                            phone = {client.phone}
                            key = {client._id} />
                    )
                }.bind(this))}
            </div>
        )
}

function Buttons(props) {
        return (
            <div className="buttons">
                <button id="enter" type="submit">add client</button>
                <button id="deleteClient" type="button" onClick={props.onDelete}>delete client</button>

                <p id="deleteInfo">Use human name to delete client</p>                                        
            </div>
        );
}

class ClientInfoForm extends React.Component {
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
    }

    handleDelete() {
        this.props.delete(this.state.humanName);
        this.setState({humanName: ''});
    }

    render() {
        return (
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

                    <Buttons onDelete={this.handleDelete} />
                </form>
            </div>	
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clients: [] };

        this.onClientAdd = this.onClientAdd.bind(this);
        this.onClientDelete = this.onClientDelete.bind(this);
        this.loadClients = this.loadClients.bind(this);
    }

    loadClients() {
        axios.get(this.props.url)
        .then(res => {
            this.setState({clients: res.data.clients});
        })
    }

    componentDidMount() {
        this.loadClients();
    }

    onClientAdd(client) {
        axios.post(this.props.url, client)
        .then(res => {
            this.loadClients();
        })
        .catch(err => {
            console.log(err);
        });
    }

    onClientDelete(clientName) {
        axios.delete(this.props.url + '/' + clientName)
        .then(res => {
            this.loadClients();
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Dogstar Client Info</h1>
                </header>
                
                <ClientInfoForm add={this.onClientAdd} delete={this.onClientDelete} />

                <Display clients={this.state.clients} />

            </div>
        );
    }
}

export default App;