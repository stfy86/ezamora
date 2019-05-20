'use strict'

var cantMaxIteraciones = 30;
var nroIteracion = 0;

while (nroIteracion < cantMaxIteraciones){
    console.log("ESTAMOS EN LA ITERACIÓN: " + ++nroIteracion);
    if (nroIteracion == 13){
        break;
    }
}