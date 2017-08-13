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

app.all('*',function(req,res,next){
	if(req.headers['x-forwarded-proto']!='https') {
	  res.redirect(`https://localhost:${port}`+req.url);
	} else {
	  next();
	}
})

app.listen(port, function() {
	console.log(`The server is running on port ${port} !`);
});