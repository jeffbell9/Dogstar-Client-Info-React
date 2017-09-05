import React from 'react';
import axios from 'axios';

import Header from './Header';
import DogPack from './DogPack';
import ClientPage from './ClientPage';
import ClientInfoForm from './ClientInfoForm';
import Display from './Display';

import {
    BrowserRouter,
    Route
} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clients: [] };

        this.onClientAdd = this.onClientAdd.bind(this);
        this.onClientDelete = this.onClientDelete.bind(this);
        this.loadClients = this.loadClients.bind(this);
        this.onClientDisplay = this.onClientDisplay.bind(this);
        this.onDisplayAll = this.onDisplayAll.bind(this);
    }

    loadClients() {
        axios.get(this.props.url)
        .then(res => {
            this.setState({clients: res.data.clients});
            console.log(this.state.clients);
        })
    }

    componentDidMount() {
        this.loadClients();
    }

    onClientAdd(client) {
        axios.post(this.props.url, client)
        .then(res => {
            this.state.clients.push(res.data.client);
            alert("Client Added!");
        })
        .catch(err => {
            console.log(err);
        });
    }

    onClientDisplay(client) {
        for(let item in this.state.clients) {
            if(this.state.clients[item].humanName === client) {
                axios.get(this.props.url + '/' + client)
                .then(res => {
                    this.setState({clients: res.data.clients});
                });
                return;
            }
        }
        alert("No client found!");
    }

    onDisplayAll() {
        this.loadClients();
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
            <BrowserRouter>
                <div>
                    <Header />
                    
                    <Route exact path="/" render={ () => <DogPack clients={this.state.clients} /> } />
                    <Route path="/client/:index" render={ ({match}) => <ClientPage clients={this.state.clients} match={match} /> } />
                    <Route path="/form" render={ () => <ClientInfoForm add={this.onClientAdd} delete={this.onClientDelete} display={this.onClientDisplay} displayAll={this.onDisplayAll} /> } />
                    <Route path="/display" render={ () => <Display clients={this.state.clients} /> } />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;