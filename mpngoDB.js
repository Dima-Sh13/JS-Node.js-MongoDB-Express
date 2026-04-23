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

db.<coleccion>.find({name: 'smith'})   || se muestras todos los resultados que cumplan la condicion, en esta caso nombre smith


db.<coleccion>.find({age: {$gt: 30}}) || $gt o $gte (equal tambien) es un modificador que nos mostrara todos los resultados mayores que el numero que decidamos

db.<coleccion>.find({age: {$lt: 30}}) || $lt lo mismo pero lower. lowet than y $gt greater than

db.<coleccion>.find({name: {$in: ['Jones', 'Brown']}})  ||not in = $nin devuelve los resultados que incluyan los elementos de la lista


$set  || una propiedad al hacer un update que te deja actualizar parcialmente. solo la propiedad que elijas
si no se usa sobreescribe el objeto entero


cuando buscamos si queremos buscar por array exacto usarmeops [] en la busqueda. si solo queremos elementos que contengan lo que buscamos 
tenemos que hacer la consulta sin []

db.<coleccion>.find().sort({age : -1})  || un find pero con la lista actualizada en orden descendente segun la edad
db.<coleccion>.find().counbt()   || para contar los registros que se ajusten a los parametros de find
db.<coleccion>.findOne({name : 'Brown'} )  || solo nos devuelve 1 resultado aunque hubiese mas

---------------------------transaccion----------------

db.<coleccion>.findAndModify({
    query: {Name: "brown"},
    update: {$inc: {age: 1} }  $inc es el commando de icremento, luego el parametro(age) y luego cuanto, en este caso 1
})  Lo busca y si lo encuentra lo modifica, no permitiendo que otro lo cambie antes de modificarlo.
es una operacion atomica, se ejecuta de una.

Este se suele usar para transacciones importantes como cuentas de banco y saldos
Este commando es uno de los mas importantes en MongoDB

$text indica que queremos hacer una busqueda de texto

*/