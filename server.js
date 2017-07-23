const path = require('path');
const express = require('express');
const app = express();

let port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
	console.log(`The server is running on port ${port} !`);
});