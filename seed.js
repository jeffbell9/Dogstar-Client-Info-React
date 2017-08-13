'use strict';

const Client = require('./models/client');

let clientName = "Jeff";

Client.find({}, (err, clients) => {
    if(!clients.length) {
        Client.create({humanName: "Jeff",
                        dogName: "Luke",
                        address: "3805 SW Admiral Way",
                        email: "human@gmail.com",
                        phone: "206-555-1234"    
        })
    }
})      