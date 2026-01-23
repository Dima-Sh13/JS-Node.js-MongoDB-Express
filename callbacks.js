function suma( n1, n2, callBack) {  // callback se puede llemar de otra forma
    var resultado = n1 + n2;
    callBack(resultado); 
}

suma(1, 5, function(resultado) {
    console.log(resultado);

} );

