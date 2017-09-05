'use strict';

const Client = require('./models/client');

let clientName = "Jeff";

Client.find({}, (err, clients) => {
    if(!clients.length) {
        Client.create({humanName: "Jeff",
                        dogName: "Luke",
                        address: "123 Somewhere Lane",
                        email: "human@gmail.com",
                        phone: "555-555-1234",
                        photo: "/images/luke.jpg"    
        })
    }
})      