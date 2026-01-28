"use strict";

var fs = require('fs');
var path = require('path')

var versionModulo = function(moduleName, callBack) {
    var fichero = path.join('./node_modules', moduleName, 'package.json');
    

};

// uso de la funcion 

var modulo = 'chance';

versionModulo(modulo, function(err, version) {
    if (err) {
        console.log("hubo un error:", err);
        return;
    }
    console.log('Es la version del modulo' + modulo + "es:" + version);
});


