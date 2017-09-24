'use strict';

const express = require('express');
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })
const Client = require('../models/client');

const router = express.Router();

router.get('/clients', (req, res, next) => {
    Client.find({}, (err, clients) => {
        if(err) {
            return res.status(500).json({message: err.message});
        } else {
            res.json({clients: clients});
        }
    })
});

router.get('/clients/:client', (req, res, next) => {
    Client.find({humanName: req.params.client}, (err, clients) => {
        if(err) {
            return res.status(500).json({message: err.message});
        } else {
            res.json({clients: clients});
        }
    })
});

router.post('/clients', upload.single('photo'), (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    let owner = req.body;
    Client.findOne({humanName: owner.humanName, dogName: owner.dogName}, (err, client) => {
        if(client) {
            client.address = owner.address;
            client.email = owner.email;
            client.phone = owner.phone;
            client.photoURL = owner.photoURL;

            client.save();

            res.json({'client': client});
        } else {
            Client.create(owner, (err, client) => {
                if(err) {
                    return res.status(500).json({err: err.message});
                } else {
                    res.json({'client': client});
                }
            });
        }
    })
    
});

router.delete('/clients/:name/:dogName', (req, res, next) => {
    let owner = req.params.name;
    let dog = req.params.dogName;
    Client.findOne({humanName: owner, dogName: dog}, (err, client) => {
        if(!client) {
            console.log("No client found");
            res.json({'message': "No client found"});
        } else {
            client.remove();
            console.log("Client deleted");
            res.json({'message': "Client deleted"});
        }
    })
});

module.exports = router;