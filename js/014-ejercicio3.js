'use strict'

var primerNro = parseInt(prompt("INGRESA EL PRIMER NRO: ", 0));
var segundoNro = parseInt(prompt("INGRESA EL SEGUNDO NRO: ", 0));

while (primerNro >= segundoNro){
    primerNro = parseInt(prompt("INGRESA EL PRIMER NRO: ", 0));
    segundoNro = parseInt(prompt("INGRESA EL SEGUNDO NRO: ", 0));
}
primerNro++;
for(primerNro; primerNro < segundoNro;primerNro++){
    console.log(primerNro);
}