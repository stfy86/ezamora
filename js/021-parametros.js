'use strict'

//PARAMETROS

//FUNCION CON DATOS FIJOS
function calcular() {
    console.log("SUMA: " + (6 + 6));
    console.log("RESTA: " + (6 - 6));
    console.log("MULTIPLICACIÓN: " + (6 * 6));
    console.log("DIVISIÓN: " + (6 / 6));
}
calcular();

//SI QUIERO QUE LOS DATOS VARIEN UTILIZO PARAMETROS
function calcular(a, b) {
    console.log("SUMA: " + (a + b));
    console.log("RESTA: " + (a - b));
    console.log("MULTIPLICACIÓN: " + (a * b));
    console.log("DIVISIÓN: " + (a / b));
}
calcular(7, 3);
calcular(4, 9);
for (var i = 1; i <= 10; i++) {
    calcular(i, 5); console.log(i);
}

