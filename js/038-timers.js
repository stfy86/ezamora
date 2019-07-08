'use strict'
window.addEventListener('load', function(){
    //TIMERS
    function intervalo(){
        var inter = setInterval(function(){
            console.log("EJECUTANTO setInterval()... ");
            var h1 = document.querySelector("h1");
            if (h1.style.fontSize == "40px"){
                h1.style.fontSize = "20px";
            }else{
                h1.style.fontSize = "40px";
            }
        }, 1500);
        return inter;
    };

    var tiempo = intervalo();

    var stop = this.document.querySelector("#stop");
    stop.addEventListener("click", (event) => {
        console.log("VAMOS A PARAR EL INTERVALO");
        clearInterval(tiempo);
    });

    var start = this.document.querySelector("#start");
    start.addEventListener("click", (event) => {
        console.log("VAMOS A INICIAR EL INTERVALO");
        tiempo = intervalo();
    });
});