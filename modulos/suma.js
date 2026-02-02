'use strict';

var suma = function(a,b) {
    return a + b;
};


module.exports = {
    suma: suma,
    resta: function(a,b) {
        return a - b;
    }
}


var calculadora = {
    suma: function(a,b) {
        return a + b;
    },
    resta: function(a,b) {
        return a - b;
    },
    mult: function(a,b) {
        return a * b;
   },
   div: function(a,b) {
        return a / b;
   }    
}


console.log(calculadora.mult(5,5))