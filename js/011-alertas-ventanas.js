'use strict'

//ALERTA
alert("MENSAJE DE ALERTA DEL CURSO DE JS");

//ALERTA DE CONFIRMACIÓN
var resultadoConfirmacion= confirm("¿CONFIRMA QUE DESEA CONTINUAR CON EL PROCESAMIENTO DE DATOS?");
console.log("RESULTADO DE LA CONFIRMACIÓN: " + resultadoConfirmacion);

if (resultadoConfirmacion){
    console.log("EL USUARIO PRESIONÓ EL BOTÓN ACEPTAR");
}else{
    console.log("EL USUARIO PRESIONÓ EL BOTÓN CANCELAR");
}

//VENTANA DE INGRESO DE DATOS
var valorIngresado = prompt("¿¿CUANTOS AÑOS TIENES??", 18);
console.log(valorIngresado);

//SIEMPRE ES UN STRING
console.log(typeof valorIngresado);

var edad = Number(valorIngresado);

console.log(typeof edad);