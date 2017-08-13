'use strict';

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/client-info', err => {
    if(err) {
        console.log("Failed connecting to Mongodb!");
    } else {
        console.log("Successfully connected to Mongo!");
    }
});


