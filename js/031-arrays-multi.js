'use strict'

//ARRAYS MULTIDIMENSIONALES

var tiposContrato = ["TEMPORAL", "DEFINITIVO"];
var contratos = ["ARRENDAMIENTO", "LABORAL", "MANTENIMIENTO"];

var contratosPorTipo = [tiposContrato, contratos];
console.log(contratosPorTipo);
console.log(contratosPorTipo[0][1]);
console.log(contratosPorTipo[1][2]);


//RECORRER ARRAYS CON for in
for (let indice in contratos) {
    console.log(contratos[indice]);
}


//BUSQUEDAS EN ARRAYS
/*
var resultBusqueda = contratos.find(function(contrato){
return contrato == "MANTENIMIENTO";
});
*/
var resultBusqueda = contratos.find(contrato => contrato == "MANTENIMIENTO");
console.log(resultBusqueda);
//findIndex, DEVUELVE EL INDICE
var resultBusqueda = contratos.findIndex(contrato => contrato == "MANTENIMIENTO");
console.log(resultBusqueda);
//some, DEVUELVE true SI SE CUMPLE UNA CONDICION DE BÚSQUEDA
var precios = [1000, 2000, 2300, 4000, 5439]
var busqPrecios = precios.some(precio => precio >= 2000);
