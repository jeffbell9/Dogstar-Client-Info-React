import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/ClientInfo';

import './css/styles.css';


ReactDOM.render(<App url="/api/clients" />, document.getElementById('container'));