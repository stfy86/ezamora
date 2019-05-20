'use strict'
var primerNro = parseInt(prompt("INGRESA EL NRO: ", 0));

while (isNaN(primerNro)) {
    primerNro = parseInt(prompt("INGRESA EL NRO: ", 0));
}
var i = 0;
document.write("<b><h1>TABLA DE " + primerNro + "</h1></b>");
// imprimimos la tabla del nro ingresado
document.write("<ul>");
for (i; i <= 10; i++) {
    document.write("<li>" + i + "*" + primerNro + " = " + (i * primerNro) + "</li>");
}
document.write("</ul>");
// imprimimos en consola
var i = 0;
// imprimimos toda la tabla 
for (i; i <= 10; i++) {
    console.log("***");
    var j = 0;
    for (j; j <= 10; j++) {
        console.log(i + "*" + j + " = " + (i * j));
    }
}

