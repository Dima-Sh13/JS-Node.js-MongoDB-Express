'use strict';

var suma = function(a,b) {
    return a + b;
};


module.exports = calculadora


var calculadora = {
    suma: function(a,b) {
        return console.log(a + b);
    },
    resta: function(a,b) {
        return console.log(a - b);
    },
    mult: function(a,b) {
        return console.log(a * b);
   },
   div: function(a,b) {
        return console.log(a / b);
   }    
}

calculadora.mult(5,5)
calculadora.resta(5,5)
calculadora.suma(5,5)
calculadora.div(5,5)

calculadora.suma(6,8)
calculadora.suma(6,9)
calculadora.div(6,0)
calculadora.suma(6,6)
calculadora.mult(6,6000)
calculadora.resta(6,-6)