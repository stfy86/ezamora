'use strict'

var primerNro = parseInt(prompt("INGRESA EL PRIMER NRO: ", 0));
var segundoNro = parseInt(prompt("INGRESA EL SEGUNDO NRO: ", 0));

while (isNaN(primerNro) && isNaN(segundoNro)) {
    primerNro = parseInt(prompt("INGRESA EL PRIMER NRO: ", 0));
    segundoNro = parseInt(prompt("INGRESA EL SEGUNDO NRO: ", 0));
}

var i = 0;
document.write("<b><h1>CALCULADORA</h1></b>");
document.write("<ul>");
document.write("<li>" + primerNro + "+" + segundoNro + " = " + (primerNro + segundoNro) + "</li>");
document.write("<li>" + primerNro + "-" + segundoNro + " = " + (primerNro - segundoNro) + "</li>");
document.write("<li>" + primerNro + "*" + segundoNro + " = " + (primerNro * segundoNro) + "</li>");
document.write("<li>" + primerNro + "/" + segundoNro + " = " + (primerNro / segundoNro) + "</li>");
document.write("</ul>");

console.log("CALCULADORA");
console.log(primerNro + "+" + segundoNro + " = " + (primerNro + segundoNro));
console.log(primerNro + "-" + segundoNro + " = " + (primerNro - segundoNro));
console.log(primerNro + "*" + segundoNro + " = " + (primerNro * segundoNro));
console.log(primerNro + "/" + segundoNro + " = " + (primerNro / segundoNro));
