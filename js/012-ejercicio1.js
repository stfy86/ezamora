var primerNro = parseInt(prompt("INGRESE EL PRIMER NRO: ", 0));
var segundoNro = parseInt(prompt("INGRESE EL SEGUNDO NRO: ", 0));

while (isNaN(primerNro) || isNaN(segundoNro) || primerNro < 0 || segundoNro < 0){
    console.log("DEBES INTRODUCIR SÓLO NÚMEROS");
    primerNro = parseFloat(prompt("INGRESE EL PRIMER NRO: ", 0));
    segundoNro = parseInt(prompt("INGRESE EL SEGUNDO NRO: ", 0));
}
//primerNro = undefined;
if (primerNro == segundoNro){
    console.log("AMBOS NUMEROS SON IGUALES");
}else if (primerNro > segundoNro){
    console.log("EL PRIMER NUMERO ES MAYOR AL SEGUNDO");
}else if (primerNro < segundoNro){
    console.log("EL PRIMER NUMERO ES MENOR AL SEGUNDO");
}else{
    console.log("ingrese solo numeros");
}

if (primerNro%2 == 0){
    console.log("EL PRIMER NUMERO ES MULTIPLO DE 2");
    console.log(primerNro + " ES MULTIPLO DE 2");
}

if (segundoNro%2 == 0){
    console.log("EL SEGUNDO NUMERO ES MULTIPLO DE 2");
    console.log(segundoNro + " ES MULTIPLO DE 2");
}