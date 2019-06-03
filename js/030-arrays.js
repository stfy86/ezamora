'use strict'

//ARRAYS
var nombre = "JUAN PÉREZ";
//DEFINICIÓN DE ARRAY CON CORCHETES
var nombres = ["JUAN PÉREZ", "OSCAR BOGARÍN", "RICARDO PANIAGUA",
    "JUANJO VILLALBA", "JAVIER LÓPEZ", "HÉCTOR BARANDA", false, 77];
//DEFINICIÓN DE ARRAY COMO OBJETO
var idiomas = new Array("INGLÉS", "FRANCÉS", "ESPAÑOL", "RUSO", "ALEMÁN");

console.log(nombres);
console.log(idiomas);

//ACCEDER A UN ELEMENTO DE UNA POSICIÓN ESPECÍFICA
console.log(idiomas[3]);


//ACCEDER AL TAMAÑO DEL ARRAY
console.log(nombres.length);

//ACCEDER A UN ELEMENTO MEDIANTE UN prompt
var posicion = parseInt(prompt("INGRESA LA POSICIÓN DEL ELEMENTO QUE QUIERES VER", 0));
console.log(nombres[posicion]); //SI SE INTENTA ACCEDER A UNA POSICIÓN INEXISTENTE DEVUELVE undefined
if (posicion >= nombres.length) {
    posicion = parseInt(prompt("INDICE NO VALIDO, INGRESA VALORES ENTRE 0 Y " + (nombres.length - 1), 0));
} else {
    alert("EL ELEMENTO EN LA POSICION " + posicion + " ES " + nombres[posicion]);
}
//RECORRER EL ARRAY COMPLETO Y MOSTRAR TODOS SUS ELEMENTOS POR PANTALLA
document.write("<H1>Idiomas más utilizados en PARAGUAY</H1>");
document.write("<UL>");
for (var i = 0; i < idiomas.length; i++) {
    document.write("<LI>");
    document.write(idiomas[i]);
    document.write("</LI>");
}
document.write("</UL>");

//RECORRER EL ARRAY COMPLETO Y MOSTRAR TODOS SUS ELEMENTOS POR PANTALLA
document.write("<H1>Idiomas más utilizados en PARAGUAY</H1>");
document.write("<UL>");
for (var i = 0; i < idiomas.length; i++) {
    document.write("<LI>" + idiomas[i] + "</LI>");
}
document.write("</UL>");
//RECORRER UN ARRAY CON forEach
document.write("<UL>");
idiomas.forEach((elemento, indice, datos) => {
    document.write("<LI>" + elemento + "</LI>");
    document.write("<LI>" + indice + "</LI>");
    //document.write("<LI>"+datos+"</LI>");
});
document.write("</UL>");
