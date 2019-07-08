'use strict'
var mostrarArray = function(array, orden = ""){
    document.write("<H1>Elementos del array " + orden + "</H1>");
    document.write("<UL>")
    array.forEach(elemento => {
        document.write("<LI>" + elemento + "</LI>");
    }); 
    document.write("<UL>")
    document.write("<HR/>")
}
var numeros = new Array(0);
for(var i = 0; i < 6;i++){
    numeros.push(parseInt(prompt("INGRESA UN NUMERO", 0)));
}

console.log(numeros);
numeros.sort((a, b) => {return b-a});
mostrarArray(numeros, "ordenado");

console.log(numeros);

numeros.reverse();
console.log(numeros);

document.write("<h2>EL ARRAY TIENE " + numeros.length + " ELEMENTOS</H2>");
var nroABuscar = parseInt(prompt("INGRESE EL NUMERO QUE DESEA BUSCAR", 0));
var posicion = numeros.indexOf(nroABuscar);
if (posicion > -1){
    document.write("EL NUMERO "+nroABuscar
                +" FUE ENCONTRADO EN LA POSICION " + posicion);
}else{
    document.write("<BR>EL NUMERO "+nroABuscar+" NO FUE ENCONTRADO");
}