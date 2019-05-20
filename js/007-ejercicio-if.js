var edad = 17;
var nombrePersona = "JUAN PEREZ";
if (edad >= 18){
    console.log(nombrePersona + " ES MAYOR DE EDAD");
    if (edad >= 40){
        console.log(" YA CUMPLIO 40 AÑOS");
    }else{
        console.log(" AÚN NO CUMPLIÓ 40 AÑOS");
    }
}else{
    console.log(nombrePersona + " SOLO TIENE " + edad + " Y NO CALIFICA COMO MAYOR DE EDAD");
}