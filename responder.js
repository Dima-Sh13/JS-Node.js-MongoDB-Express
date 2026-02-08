/// metodos de respuesta al servidor 

res.send()  // metodo generico de respuesta. el body puede ser: buffer, string, objeto o array

// hay que identificarlo apropiadamente por ejemplo si mandamos un bojeto

res.send({ some:'json'})  // corchetes de objeto

res.send(new Buffer("whoop")); // Buffer es un objeto asique mandamos la instancia

// o con codigos de error 

res.status(404).send('Sorry we cannot find that');


