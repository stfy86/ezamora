'use strict'

// MÉTODOS DE TRANSFORMACIÓN DE TEXTOS (CADENAS)

var numero = 6443;
var asu = "Nuestra Señora de la Asunción, Paraguay";
var caacupe = "Virgen de los Milagros de Caacupé";

//COMO TRANSFORMAR UN NUMERO A UN STRING
var numeroTxt = numero.toString();
console.log(numeroTxt);
console.log(typeof numeroTxt);

//COMO TRANSFORMAR UN TEXTO DE MINUSCULAS A MAYUSCULAS
//Y VICEVERSA
var asuUpper = asu.toUpperCase();
var caaLower = caacupe.toLowerCase();

//PROPIEDAD PARA CONOCER LA LONGITUD DE UN TEXTO
var longTexto = caacupe.length;
var vacia = "";
console.log(longTexto);
console.log(vacia.length);
vacia = null;
console.log(vacia.length); //ERROR

//SI FUERA UN ARRAY
//EL length SIRVE PARA CONTAR LA CANTIDAD DE ELEMENTOS
//QUE HAY DENTRO DE UN TEXTO O ARRAY
var array = ["elemento1", "elemento2"];
console.log(array.length);

//CONCATENAR TEXTOS
var textoUnido = asu + ' / ' + caacupe;
console.log(textoUnido)
var textoUnidoConcat = asuUpper.concat(" ... ").concat(caaLower);
console.log(textoUnidoConcat);

