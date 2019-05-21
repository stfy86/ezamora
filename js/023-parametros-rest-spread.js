'use strict'

//REST
function listarPlantas(planta1, planta2, ...resto_de_plantas) {
    console.log("Planta 1: ", planta1);
    console.log("Planta 2: ", planta2);
    console.log(resto_de_plantas);
}

listarPlantas("lapacho", "yvyrapyta", "peterevy", "cedro", "quebracho");

//SPREAD
var plantas = ["lapacho", "yvyrapyta"];
listarPlantas(...plantas, "yvyrapyta", "peterevy", "cedro", "quebracho");