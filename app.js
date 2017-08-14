import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/ClientInfo';

import './css/styles.css';


ReactDOM.render(<App url="https://localhost:8080/api/clients" />, document.getElementById('container'));