const fs = require('fs');
const https = require('https');
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

app.all('*',function(req,res,next){
	if(req.headers['x-forwarded-proto']!=='https') {
	  return res.redirect(`https://${req.hostname}${req.url}`);
	} else {
	  return next();
	}
});

app.use('/api',router);

https.createServer({
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
  }, app).listen(port, () => {
	  console.log(`The server is running on port ${port} !`);
});

/*app.listen(port, () => {
	console.log(`The server is running on port ${port} !`);
});*/