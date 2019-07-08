'use strict'

window.addEventListener('load', ()=>{
    console.log("EJERCICIO DOM...");

    var formulario = document.querySelector("#formulario");
    var div_dashed = document.querySelector(".dashed");
    div_dashed.style.display = "none";
    formulario.addEventListener('submit', ()=>{
        console.log("EVENTO SUBMIT CAPTURADO");
        var ruc = document.querySelector("#ruc");
        var razonSocial = document.querySelector("#razonSocial");
        var actividadPrincipal = document.querySelector("#actividadPrincipal");
        var capitalSocial = document.querySelector("#capitalSocial");

        
        var datos_usuario = [ruc, razonSocial, actividadPrincipal, capitalSocial];
        
        var p_ruc = document.querySelector("#p_ruc span");
        var p_razon_social = document.querySelector("#p_razon_social span");
        var p_actividad = document.querySelector("#p_actividad span");
        var p_capital = document.querySelector("#p_capital span");
        console.log('ruc.value.trim() ' + ruc.value.trim());
        if (ruc.value.trim() == ''){
            document.querySelector("#error_ruc").innerHTML = 'EL RUC ES REQUERIDO';
            div_dashed.style.display = "none";
            return false;
        }else if (isNaN(capitalSocial.value)){
            document.querySelector("#error_capital").innerHTML = 'EL CAPITAL DEBE SER UN NUMERO';
            div_dashed.style.display = "none";
            return false;
        }else {
            div_dashed.style.display = "block";
            p_ruc.innerHTML = ruc.value;
            p_razon_social.innerHTML = razonSocial.value;
            p_actividad.innerHTML = actividadPrincipal.value;
            p_capital.innerHTML = capitalSocial.value;
            document.querySelector("#error_ruc").innerHTML = '';
            document.querySelector("#error_capital").innerHTML = '';
        }
        // for(let index in datos_usuario){
        //     console.log(index);
        //     var parrafo = document.createElement("p");
        //     console.log(("p_" + index));
        //     parrafo.setAttribute('id', ("p_" + index));
        //     parrafo.append(datos_usuario[index].value);
        //     div_dashed.append(parrafo);
        // }

        // var parrafo = document.createElement("p");
        // parrafo.append(ruc);
        // parrafo.append(document.createElement("br"));
        // parrafo.append(razonSocial);
        // parrafo.append(document.createElement("br"));
        // parrafo.append(actividadPrincipal);
        // parrafo.append(document.createElement("br"));
        // parrafo.append(capitalSocial);
        // div_dashed.append(parrafo);
        console.log(ruc, razonSocial, actividadPrincipal, capitalSocial);
    });
})