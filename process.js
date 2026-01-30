'use strict';

// informacion de proceso

var info = {
  pid: process.pid,
  version: process.version,
  platform: process.platform,
  title: process.title,
  argumentos: process.argv,
  execPath: process.execPath,
  carpeta: process.cwd()

};

console.log('entro en ', info);

process.on('ext', function(){
    console.log("me despido colega");
});

console.log('fiin del proceso');

process.exit(0);


console.log("aqui no llega");

