/* 

show dbs   || muestra las bases de datos disponibles

use <nombre dbs>  || para operar en la base de datos

db.<nombre de la coleccion>().pretty()  || nos esneña los datos guardados en dicha collecion

show collections  || nos enseña las colecciones de esa base de datos, usar despues de use<base de datos>

db.<coleccion>.insert()  || insertamos uno o mas objetos en la collecion

db.<coleccion>.update(aqui va lo modificado, y a como se va a modificar )

db.<coleccion.createIndex({propiedad1: 1(ej:nombre), propiedad2:-1(ej:edad)})  || creamos un indice con las propiedades que vamos a querer usar para buscar los datos

db.<coleccion>.getIndexes()   || para mostrar los indices de una coleccion

---------------------------------FILTROS DE BUSQUEDA-----------------------------

db.<oleccion>.find({name: 'smith'})   || se muestras todos los resultados que cumplan la condicion, en esta caso nombre smith


db.<coleccion>.find({age: {$gt: 30}}) || $gt o $gte (equal tambien) es un modificador que nos mostrara todos los resultados mayores que el numero que decidamos

db.<coleccion>.find({age: {$lt: 30}}) || $lt lo mismo pero lower. lowet than y $gt greater than

db.<coleccion>.find({name: {$in: ['Jones', 'Brown']}})  ||not in = $nin devuelve los resultados que incluyan los elementos de la lista

*/