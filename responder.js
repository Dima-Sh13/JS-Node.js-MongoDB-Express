/// metodos de respuesta al servidor 

res.send()  // metodo generico de respuesta. el body puede ser: buffer, string, objeto o array

// hay que identificarlo apropiadamente por ejemplo si mandamos un bojeto

res.send({ some:'json'})  // corchetes de objeto

res.send(new Buffer("whoop")); // Buffer es un objeto asique mandamos la instancia

// o con codigos de error 

res.status(404).send('Sorry we cannot find that');


// metodo de respuesta con json


res.json(null)
res.json({user: 'tobhias'})
res.status(500).json({error: 'message'})


// metodo download. este metodo es el tipico que nos abre una ventana de guardar como.
// el nombre del fichero es opcional 
res.download('/report-12.pdf', 'report-otro.pdf');


// metodo redirect. redirige al ususario a un path absoluto o relativo, o devuelta desde donde ha venido con back

res.redirect('foo/bar'); // relativa al root host name
res.redirect('http://example.com'); // absoluta
res.redirect(301, 'http://example.com'); // con status
res.redirect('../login'); // ruta relativa al path actual
res.redirect('back');  // vuelve al referer, de la pagina de la que venia



// metodo render. usado para mandar paginas o vistas como respuesta
// acepta parametro opcional 'locals' para dar variables locales a la vista

res.render('index');


//render de la vista user con el objeto locals
res.render('users', {name: 'tobi'});



// metodo sendFile. envia un fichero como si fuera estatico. acepta un objeto opciones y un callback para comprobar los resultados de la transmision


var options = {
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

res.sendFile(fileName, options);




