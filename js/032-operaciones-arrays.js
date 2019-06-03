'use strict'

//OPERACIONES CON ARRAYS
var contratos = ["ARRENDAMIENTO", "LABORAL", "MANTENIMIENTO"];

//push, AGREGA UN ELEMENTO A UN ARRAY
contratos.push("LIMPIEZA");
//EJERCICIO: introducir 5 elementos con prompt
console.log(contratos);
//pop, QUITA EL ÚLTIMO ELEMENTO
contratos.pop();
console.log(contratos);
//indexOf, LOCALIZAR UN ELEMENTO Y ELIMINARLO
var indice = contratos.indexOf("LABORAL");
console.log(indice);
if (indice > -1 && indice < contratos.length) {
    contratos.splice(indice, 1);//CUANTOS INDICES QUIERO BORRAR A PARTIR DEL INDICE
}
//join, CONVIERTE UN ARRAY A TEXTO
var contratos_string = contratos.join();
console.log(contratos_string);
