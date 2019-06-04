'use strict'

//DOM
//SELECCIONAMOS EL DIV A PARTIR DE SU ID Y GUARDAMOS EN UNA VARIABLE
var contenedor = document.getElementById("contenedor");
//MOSTRAMOS EL CONTENIDO DE LA VARIABLE
console.log(contenedor);
//OBTENEMOS EL CONTENIDO DEL DIV Y LO GUARDAMOS EN UNA VARIABLE
var contenido = contenedor.innerHTML;
//MOSTRAMOS EL CONTENIDO DEL DIV
console.log(contenido);
//MODIFICAMOS EL CONTENIDO DE LA ETIQUETA DIV
contenedor.innerHTML = "CAMBIAMOS EL CONTENIDO DEL DIV DESDE JS";
//MOSTRAMOS EL CONTENIDO MODIFICADO DE LA ETIQUETA DIV
console.log(contenedor.innerHTML);
//MODIFICAMOS EL COLOR DE FONDO DEL CONTENEDOR (DIV)
contenedor.style.background = "yellow";
//MODIFICAMOS EL PADDING DEL DIV (ESPACIADO ALREDEDOR DEL DIV)
contenedor.style.padding = "25px";
//CAMBIAMOS EL COLOR DEL CONTENIDO
contenedor.style.color = "blue";

//DEFINIMOS UNA FUNCION QUE CAMBIE EL COLOR DEL DIV Y SU CONTENIDO
function cambiarColor(bgColor, txtColor) {
    contenedor.style.background = bgColor;
    contenedor.style.color = txtColor;
}
//AGREGAMOS EL ATRIBUTO class AL DIV, CON UNA O MAS CLASES
contenedor.className = "estilo1";
//OBTENEMOS EL DIV UTILIZANDO document.QuerySelector()
//HAY QUE INCLUIR EL CARACTER # PARA OBTENER POR ID
//PARA OBTENER POR CLASE NO SE UTILIZA #, SE UTILIZA .
//PARA OBTENER POR NOMBRE DE LA ETIQUETA, SIN NADA
var cont = document.querySelector("#contenedor");
//CAMBIAR EL FONDO A GRIS
cont.style.background = "gray";

//OBTENEMOS ELEMENTOS A PARTIR DE SU ETIQUETA
var todosLosDiv = document.getElementsByTagName("div");
console.log(todosLosDiv);
//ACCEDEMOS A UN ELEMENTO DEL ARRAY
var txtContent = todosLosDiv[0].textContent;
//MOSTRAMOS EN CONSOLA EL CONTENIDO EN TEXTO
console.log(txtContent);
//MODIFICAMOS EL CONTENIDO DEL TEXTO
todosLosDiv[0].innerHTML = "CONTENIDO EN TEXTO MODIFICADO";
//MODIFICAMOS EL ESTILO DEL DIV
todosLosDiv[0].style.background = 'red';
//RECORREMOS LA LISTA Y CREAMOS UNA LISTA EN EL document
for (const key in todosLosDiv) {
    //DETERMINAMOS SI EL OBJETO TIENE UNA PROPIEDAD CON EL NOMBRE (key) ESPECIFICADO
    if (todosLosDiv.hasOwnProperty(key)) {
        if (typeof todosLosDiv[key].textContent == 'string') {
            const elemento = todosLosDiv[key];
            var parrafo = document.createElement("p");
            var texto = document.createTextNode(elemento.textContent);
            parrafo.append(texto);
            document.querySelector("#seccionPrincipal").prepend(parrafo);
        }
    }
}
//CREAMOS UN ELEMENTO HR UTILIZANDO JS
var hr = document.createElement("hr");
document.querySelector("#seccionPrincipal").append(hr);




