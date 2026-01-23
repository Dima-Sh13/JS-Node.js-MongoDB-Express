"use strict";

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

// bucle asíncrono en paralelo

var acabados = 0;

for( var i = 0; i < 5; i++) {
  escribeTras2Segundos('texto' + i, function() {
    acabados++;
    if (acabados >= 5) {
      console.log('fin');
    }
  });
}
// aqui salen todos los textos al mismo tiempo porque el for no espera al callback y luego se ejecutan todos a la vez