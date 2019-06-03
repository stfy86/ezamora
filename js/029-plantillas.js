'use strict'

//PLANTILLAS DE TEXTO
var nombres = prompt("POR FAVOR, INGRESA TUS NOMBRES");
var apellidos = prompt("POR FAVOR, INGRESA TUS APELLIDOS");

var texto = "TUS NOMBRES SON: " + nombres + "<br/> TUS APELLIDOS SON: " + apellidos;
document.write(texto);

var plantilla = `
<H1>BUENOS DÍAS!</H1>
<H2>TUS NOMBRES SON: ${nombres}</H2>
<H2>TUS APELLIDOS SON: ${apellidos}</H2>
`;
console.log(plantilla);
document.write("<hr/>");
document.write(plantilla);
