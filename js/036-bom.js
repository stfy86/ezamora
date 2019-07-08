'use strict'

//MOSTRAMOS EN CONSOLA EL TAMAÑO DE LA VENTANA
console.log(window.innerHeight);
console.log(window.innerWidth);

//CREAMOS UNA FUNCION QUE MUESTRE AMBOS VALORES
function getBounds(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}
//INVOCAMOS A LA FUNCION
getBounds();
//MOSTRAMOS EN LA CONSOLA EL ANCHO DE LA PANTALLA
console.log(screen.width);
console.log(screen.height);
//MOSTRAMOS EN LA CONSOLA LA URL DE LA VENTANA ACTUAL
console.log(window.location.href);
//REDIRIGIMOS A OTRA PAGINA
function redireccionar(url){
    window.location.href = url;
}
//ABRIMOS UNA VENTANA NUEVA
function abrir(url){
    window.open(url, "", "height=300, width=400");
}