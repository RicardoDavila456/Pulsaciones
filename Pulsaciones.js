function calcularPulsaciones(){
var edad=document.getElementById("edad").value;
var sexo=document.getElementById("Sexo").selected;
var resultado;
if(sexo==="Masculino"){
    resultado=(210-edad)/10;
}else{
    resultado=(220-edad)/10;
}
document.getElementById("pulsaciones").value=resultado;
}