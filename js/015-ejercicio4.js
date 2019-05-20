'use strict'

var primerNro = parseInt(prompt("INGRESA EL PRIMER NRO: ", 0));
var segundoNro = parseInt(prompt("INGRESA EL SEGUNDO NRO: ", 0));

while (primerNro >= segundoNro) {
    primerNro = parseInt(prompt("INGRESA EL PRIMER NRO: ", 0));
    segundoNro = parseInt(prompt("INGRESA EL SEGUNDO NRO: ", 0));
}
primerNro++;
console.log("IMPRIMIMOS LOS IMPARES")
for (primerNro; primerNro < segundoNro; primerNro++) {
    if (primerNro % 2 != 0) { // solo los nros pares
        console.log(primerNro);
    }
}