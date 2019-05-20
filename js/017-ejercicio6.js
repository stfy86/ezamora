'use strict'

var primerNro = parseInt(prompt("INGRESA UN NRO: ", 0));
// valida que sea un nro
while (isNaN(primerNro)) {
    primerNro = parseInt(prompt("INGRESA UN NRO: ", 0));
}

if (primerNro % 2 === 0) {
    console.log("ES PAR " + primerNro);
} else {
    console.log("ES IMPAR " + primerNro);
}