const path = require('path');
const express = require('express');
const app = express();
const router = require('./api');
const parser = require('body-parser');

require('./database');
require('./seed');

let port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(parser.json());

app.use('/api',router);

app.listen(port, function() {
	console.log(`The server is running on port ${port} !`);
});