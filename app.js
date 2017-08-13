import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/ClientInfo';

import './css/styles.css';

let port = process.env.PORT || 8080;


ReactDOM.render(<App url={`https://localhost:${port}/api/clients`} />, document.getElementById('container'));