'use strict'

//OPERADORES

var operandoA = 5;
var operandoB = 10;
var resultado = operandoA + operandoB;

console.log("Resultado de la operación: " + resultado);

//TIPOS DE DATOS
var numeroEntero = 759;
var cadena = 'CADENA DE TEXTO, TAMBIÉN PODRÍA USARSE COMILLAS DOBLES, "LAS QUE SE UTILICEN" AL PRINCIPIO Y AL FINAL TIENEN PRIORIDAD';
var booleano = true;
console.log(numeroEntero);
console.log(cadena);
console.log(booleano);
//FUNCIONES PARA CONVERTIR DE UN TIPO DE DATOS A OTRO
var numeroEnTexto = "777.5"; //ESTE NO ES UN NUMERO REAL, YA QUE FUE DEFINIDO COMO CADENA, NO PUEDE OPERARSE CON ÉL
//SI TRATAMOS DE SUMAR CON UN NÚMERO, NO REALIZARÁ LA OPERACIÓN, CONCATENARÁ
console.log(numeroEnTexto + 23);
//SI UTILIZAMOS LA FUNCIÓN Number, TOMA EL STRING Y LO INTENTA CONVERTIR A UN NÚMERO
//CON ESTO SÍ SE PODRÁ REALIZAR LA OPERACIÓN DE SUMA
console.log(Number(numeroEnTexto) + 23); //Number convierte a un número entero o flotante
//PODEMOS UTILIZAR LAS FUNCIONES parseInt(...), parseFloat(...)
console.log(parseInt(numeroEnTexto)+43); //TOMA EL ARGUMENTO E INTENTA CONVERTIR A UN ENTERO
console.log(parseFloat(numeroEnTexto)+43); //TOMA EL ARGUMENTO E INTENTA CONVERTIR A UN FLOTANTE
//PODEMOS CONVERTIR UN ENTERO A UN STRING
console.log(String(numeroEntero) + 8);

//TYPEOF
console.log(typeof numeroEntero);
console.log(typeof cadena);
console.log(typeof booleano);
console.log(typeof numeroEnTexto);
console.log(typeof parseFloat(numeroEnTexto));
