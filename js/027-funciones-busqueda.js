'use strict'

// MÉTODOS DE REALIZAR BUSQUEDAS EN TEXTOS (CADENAS)
var asu = "Nuestra Señora de la Asunción, Paraguay";
var caacupe = "Virgen de los Milagros de Caacupé";
//BUSCAR SI EXISTE UNA PALABRA DENTRO DE UN STRING
//indexOf, el índice a partir del cual aparece la palabra
var ubicacion = asu.indexOf("de");
console.log(ubicacion);
ubicacion = asu.indexOf("xx"); //-1 si no encuentra
console.log(ubicacion);
//lastIndexOf, la última posición en la cual aparece la palabra
var ultUbicacion = caacupe.lastIndexOf("de");
console.log(ultUbicacion);
//search, igual que indexOf
ubicacion = asu.search("la");
console.log(ubicacion);
//match, devuelve un array con la palabra, el indice y el texto original
var matching = caacupe.match("de");
console.log(matching);
//SI QUEREMOS QUE BUSQUE TODAS LAS COINCIDENCIAS
//UTILIZAMOS UNA EXPRESIÒN REGULAR
matching = caacupe.match(/de/g);
console.log(matching);
//substr, devuelve una porción del texto original
var substring = caacupe.substr(10, 10); //posición inicial, cantidad
console.log(substring);
//substring, devuelve una porción del texto original
substring = caacupe.substring(10, 20); //posición inicial, posición final
console.log(substring);
//charAt, devuelve una letra a partir de una posición
var caracter = asu.charAt(8);
console.log(caracter);
//startsWith, devuelve true si el texto comienza con el texto indicado
var comienza = asu.startsWith("Nuestra");
console.log(comienza);
//endsWith, devuelve true si el texto termina con el texto indicado
var termina = asu.endsWith("Paraguay");
console.log(termina);
//includes, devuelve true si el texto incluye al texto indicado
var incluye = asu.includes("Paraguay");
console.log(incluye);
