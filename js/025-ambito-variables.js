'use strict'

//AMBITO DE LAS VARIABLES

function saludar(saludo) {
    console.log(saludo);
    console.log(numeroX); // se puede invocar a una variable global del archivo aunque no esté en este scope 
    //si defino una variable dentro de mi función, no podré utilizarla fuera
    var saludo_a_todos = "variable dentro del scope de la función";
    console.log(saludo_a_todos); //podré utilizar la variable sin problemas
}

var numeroX = 23;
var saludo = "Bienvenidos al Curso de JS en la UCSA";
saludar(saludo);
console.log(saludo_a_todos); //NO PODRE UTILIZAR LA VARIABLE DECLARADA DENTRO DE UNA FUNCIÓN
