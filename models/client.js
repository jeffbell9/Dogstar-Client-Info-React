'use strict';

const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    dogName: String,
    humanName: String,
    address: String,
    email: String,
    phone: String,
    photo: String
});

const model = mongoose.model('Client', clientSchema);

module.exports = model;