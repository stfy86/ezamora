'use strict'
// funciones anonimas
var disco = function (nombre) {
    return "El nombre del disco es " + nombre;
}

disco("15 exitos de LUIS MIGUEL");

// callback
function sumar(primerNro, segundoNro) {
    var suma = primerNro + segundoNro;
    return suma;
}

console.log(sumar(3, 6));
function procesar(primerNro, segundoNro, sumarYMostrar, sumaDos) {
    var suma = sumar(primerNro, segundoNro);
    sumarYMostrar(suma);
    sumaDos(suma);
    return suma;
}

procesar(3, 6, function (dato) {
    console.log("El resultado de la suma es " + dato);
},
    function (dato) {
        console.log("El resultado de la suma por " + dato + " mas 2 es igual " + (dato + 2));
    });

// funciones flecha
procesar(3, 6, (dato) => {
    console.log("El resultado de la suma es " + dato);
},
    (dato) => {
        console.log("El resultado de la suma por " + dato + " mas 2 es igual " + (dato + 2));
    });    