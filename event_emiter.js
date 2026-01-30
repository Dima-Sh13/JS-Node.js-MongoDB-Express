'use strict';

var events = require('events');
var myEmiter = new events.EventEmitter();


myEmiter.on("llamar telefono", sonarTelefono);

myEmiter.on("llamar telefono", vibrarTelefono);

function sonarTelefono(quien) {
    if (quien === "mama") {
        return;
    }
    console.log("ringringring");
}



function vibrarTelefono() {
    console.log("wrrwrrwrr");
}


myEmiter.emit("llamar telefono", "mama");



