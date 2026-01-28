"use strict";

var fs = require('fs');
var path = require('path');

var versionModulo = function(moduleName, callBack) {
    var fichero = path.join('./node_modules', moduleName, 'package.json');
    fs.readFile(fichero, 'utf8', function(err, datos) {
        if (err) {
            callBack(err);
            return;
        }
        //si no ha habido error
        // convertimos contenido en objeto

        var packageJson = JSON.parse(datos);
        
        if (!packageJson.version) {
            callBack('No se encuentra la etiqueta de version en el archivo:' + fichero);
            return;
        }
        // llamamos al callBack de finalizacion

        callBack( null, packageJson.version);

    });

};

// uso de la funcion 

var modulo = 'chance';

versionModulo(modulo, function(err, version) {
    if (err) {
        console.log("hubo un error:", err);
        return;
    }
    console.log('La version del modulo ' + modulo + " es:" + version);
});


