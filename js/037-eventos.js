'use strict'
//AGREGAMOS UN LISTENER AL load DEL window
window.addEventListener('load', ()=>{
    //CREAMOS LA FUNCIÓN cambiarColor()
    var boton = document.querySelector("#btnProcesar");
    boton.style.background = "blue";

    function cambiarColor(){
        let boton = document.querySelector("#btnProcesar");
        if (boton.style.background == 'blue'){
            boton.style.background = 'orange';
            boton.style.border = "2px solid #ddd";
        }else if (boton.style.background == 'orange'){
            boton.style.background = 'blue';
            boton.style.border = "2px solid #bbb";
        }
        // boton.style.padding = "10px";
    }
    //CAMBIAMOS EL COLOR DEL BOTON AL HACER CLICK
    boton.addEventListener('click', (event) => {
        console.log(event);
        cambiarColor();
    });
    //CAMBIAMOS EL FONDO DEL BOTON AL PASAR EL MOUSE ENCIMA
    boton.addEventListener("mouseover", ()=>{
        boton.style.background = 'magenta';
    });
    //CAMBIAMOS EL FONDO Y TEXTO DEL BOTON AL SALIR EL MOUSE DE ENCIMA
    boton.addEventListener("mouseout", ()=>{
        boton.style.background = 'black';
        boton.style.color = 'yellow';
    });
    //CAMBIAMOS EL PADDING DEL BOTON AL HACER DOBLE CLICK
    boton.addEventListener("dblclick", ()=>{
        console.log("DOBLE CLICK");
        boton.style.padding = "20px";
    });

    //OBTENEMOS EL CAMPO DE TEXTO
    var txtNomApe = document.querySelector("#nombreApellido");

    //FOCUS
    txtNomApe.addEventListener('focus', ()=>{
        console.log("ESTAMOS DENTRO DEL CAMPO DE TEXTO");
    });
    //BLUR
    txtNomApe.addEventListener('blur', ()=>{
        console.log("SALIMOS DEL CAMPO DE TEXTO");
    });
    //CHANGE
    txtNomApe.addEventListener('change', ()=>{
        console.log("SALIMOS DEL CAMPO DE TEXTO, CON CAMBIOS");
    });
    //KEYPRESS
    txtNomApe.addEventListener('keypress', (event)=>{
        console.log("TECLA PRESIONADA " 
        + String.fromCharCode(event.keyCode));
    });
    //KEYDOWN
    txtNomApe.addEventListener('keydown', (event)=>{
        console.log("TECLA PRESIONANDOSE " 
        + String.fromCharCode(event.keyCode));
    });
    //KEYUP
    txtNomApe.addEventListener('keyup', (event)=>{
        console.log("TECLA SOLTANDOSE " 
        + String.fromCharCode(event.keyCode));
    });
});
