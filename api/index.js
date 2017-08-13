'use strict';

const express = require('express');
const Client = require('../models/client');

const router = express.Router();

router.get('/clients', (req, res) => {
    Client.find({}, (err, clients) => {
        if(err) {
            return res.status(500).json({message: err.message});
        } else {
            res.json({clients: clients});
        }
    })
});

router.post('/clients', (req, res) => {
    let client = req.body;
    Client.create(client, (err, client) => {
        if(err) {
            return res.status(500).json({err: err.message});
        } else {
            res.json({'client': client});
        }
    });
});

router.delete('/clients/:name', (req, res) => {
    let client = req.params.name;
    Client.remove({humanName: client}, err => {
        if(err) {
            return res.status(500).json({err: err.message});
        } else {
            res.json({'client': client});
        }
    });
});

module.exports = router;