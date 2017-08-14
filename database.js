'use strict';

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/client-info', (err, res) => {
    if(err) {
        console.log("Failed connecting to Mongodb!");
    } else {
        console.log("Successfully connected to Mongo!");
    }
});
