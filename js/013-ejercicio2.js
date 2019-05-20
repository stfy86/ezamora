'use strict'

var suma = 0;
var contador = 0;

do{
    var nro = parseInt(prompt("INGRESE UN NUMERO: ", 0));
    if (isNaN(nro)){
        nro = 0;
    }else{
        if (nro >= 0){
            suma += nro;
            contador++;
        }
    }
}while(nro >= 0);

console.log("PROMEDIO: " + suma/contador);
console.log("SUMA: " + suma);