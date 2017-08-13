'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/client-info', err => {
    if(err) {
        console.log("Failed connecting to Mongodb!");
    } else {
        console.log("Successfully connected to Mongo!");
    }
});


