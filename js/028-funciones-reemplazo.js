'use strict'

// MÉTODOS DE REEMPLAZO DE TEXTOS (CADENAS)
var asu = "Nuestra Señora de la Asunción, Paraguay";
var caacupe = "Virgen de los Milagros de Caacupé";
//replace, REEMPLAZA UN TEXTO POR OTRO
var reemplazo = asu.replace("Asunción", "Encarnación");
console.log(reemplazo);
//slice, DEVUELVE EL TEXTO RECIRTADO A PARTIR DE UN INDICE
var slicing = asu.slice(15, 30); //funciona como substring
console.log(slicing);
//split, DIVIDE UN TEXTO EN BASE A UN CARACTER O TOKEN
var textoDividido1 = asu.split(",");
console.log(textoDividido1);
var textoDividido2 = caacupe.split(" ");
console.log(textoDividido2);
//trim, QUITA LOS ESPACIOS EN BLANCO
asu = " Nuestra Señora de la Asunción, Paraguay ";
console.log(asu);
console.log(asu.trim());
