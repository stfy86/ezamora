'use strict'

//PARAMETROS OPCIONALES

function calcular(a, b, mostrarEnConsola = true) {
    if (mostrarEnConsola) {
        console.log("SUMA: " + (a + b));
        console.log("RESTA: " + (a - b));
        console.log("MULTIPLICACIÓN: " + (a * b));
        console.log("DIVISIÓN: " + (a / b));
    } else {
        document.write("<h1>Mostramos los datos de la calculadora</h1>");
        document.write("SUMA: " + (a + b) + "<br/>");
        document.write("RESTA: " + (a - b) + "<br/>");
        document.write("MULTIPLICACIÓN: " + (a * b) + "<br/>");
        document.write("DIVISIÓN: " + (a / b) + "<br/>");
    }
}
calcular(4, 9);
calcular(4, 9, false);