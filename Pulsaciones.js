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
return resultado;
}


function definirJson(){
    var sex=document.getElementById("Sexo").value;
    var iden=document.getElementById("identificacion").value;
    var primerNombre=document.getElementById("PrimerNombre").value;
    var primerApellido=document.getElementById("PrimerApellido").value;
    var ed=document.getElementById("edad").value;
    var pulsa=calcularPulsaciones();

    var persona={
        identificacion:iden,
        primerNombre:primerNombre,
        primerApellido: primerApellido,
        sexo:sex,
        edad:ed,
        pulsaciones:pulsa,
    }
    return persona;
}

function guardar(){
    var personas = [];
    var perTemporal= definirJson();
    if(localStorage.getItem("BDlocal")!=null){
        personas=JSON.parse(localStorage.getItem("BDlocal"));
    }
    personas.push(perTemporal);
    localStorage.setItem("BDlocal",JSON.stringify(personas));
}

function consultar(){
    limpiarTabla();
    var personas= [];
    if(localStorage.getItem("BDlocal")!=null){
        personas=JSON.parse(localStorage.getItem("BDlocal"));
    }
    personas.forEach(item => {
        document.getElementById("cuerpotabla").innerHTML +=
        "<tr>" +
            "<td>" + item.identificacion +"</td>" +
            "<td>" + item.primerNombre +"</td>" +
            "<td>" + item.primerApellido +"</td>" +
            "<td>" + item.sexo +"</td>" +
            "<td>" + item.edad +"</td>" +
            "<td>" + item.pulsaciones +"</td>" ;
    });

    function limpiarTabla() {
        var tabla = document.getElementById("cuerpotabla");
        var contador= tabla.rows.length;
        for (var x = contador ; x > 0; x--) {
            tabla.deleteRow(x);
        }
    }}