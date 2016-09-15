var estudiantes =[
{
	"codigo":"01-SMNR-2-041",
	"nombre":"Franklin Alexander Marte Gonzalez", 
	"nota": "98"
},
{
	"codigo":"01-SMNR-2-042",
	"nombre":"Hector Junior Ortiz Nuñez",
	"nota": "97"
},
{
	"codigo":"01-SMNR-2-043",
	"nombre":"Juan Carlos Maldonado Santana",
	"nota": "97"
},
{
	"codigo":"01-SMNR-2-044",
	"nombre":"Luis Enrique Lima Alonso",
	"nota": "99"
},
{
	"codigo":"01-SMNR-2-045",
	"nombre":"Sixta Altagracia Gonzalez Taveras",
	"nota": "70"
},
{
	"codigo":"01-SMNR-2-046",
	"nombre":"Neftali Del Rosario Sanchez",
	"nota": "80"
},
{
	"codigo":"01-SMNR-2-047",
	"nombre":"Edwin Janel Caraballo",
	"nota": "78"
},
{
	"codigo":"01-SMNR-2-048",
	"nombre":"Dariel Garcia Castro",
	"nota": "88"
},
{
	"codigo":"01-SMNR-2-049",
	"nombre":"Jonatha Miguel Areche Rosario",
	"nota": "79"
},
{
	"codigo":"01-SMNR-2-050",
	"nombre":"Joan Rijo Castro",
	"nota": "92"
}
];
//document.getElementById("valor").innerHTML=estudiantes.length;


function mostrar_estudiante(){
	var prueba="<tr><td><b>Codigo Estudiante</b></td> <td> <b>Nombre Estudiante</b> </td> <td><b>Nota</b></td><tr>" ;
	var mostrar ="";
	for (var i =estudiantes.length-1 ; i >=0 ; i--) {
		 mostrar += "<tr><td>"+estudiantes[i].codigo +"</td>"+
		"<td>" + estudiantes[i].nombre + "</td>" + 
		"<td>"+ estudiantes[i].nota + "</td>"  +
		"</tr>"
	};
	document.getElementById("tabla").innerHTML = mostrar;
	document.getElementById("thead").innerHTML = prueba;
	
}
function mostrar_nota_mayor(){
	var nota = 0;
	var estudiante="";
	for (var i = estudiantes.length-1; i >= 0; i--) {
		//Esta condicion compara las notas y si es mayor a la anterior se la asigna a la variable nota
		if (estudiantes[i].nota > nota) {
			nota=estudiantes[i].nota;
		};
		//esta condicion identifica si la nota es correspondiente al estudiante y asigna el nombre del estudiantes a la variable estudiante
		if (estudiantes[i].nota===nota) {
			estudiante=estudiantes[i].nombre;
		};
	}
	document.getElementById("nota_mayor").innerHTML="<tr><td><b>El Estudiate con la mayor nota es:</b></td> " + 
	 "<td>"+estudiante + "</td><td>" + nota + "</td> </tr>"; 

}
function mostrar_nota_menor(){
	var nota = 100;
	var estudiante="";
	for (var i = estudiantes.length - 1; i >= 0; i--) {
		
		if (estudiantes[i].nota<nota) {
			nota=estudiantes[i].nota;
		};
		if (estudiantes[i].nota===nota) {
			estudiante=estudiantes[i].nombre;
		};

	};
	document.getElementById("nota_menor").innerHTML="<tr><td><b>El Estudiate con la menor nota es:</b></td> " + 
	 "<td>"+estudiante + "</td><td>" + nota + "</td> </tr>"; 
}
function monstrar_promedio() {
	var promedio=0;
	for (var i = estudiantes.length - 1; i >= 0; i--) {
		promedio += parseInt(estudiantes[i].nota);
	};
	document.getElementById("tfoot").innerHTML="<tr><td><b>El promedio de nota por estudiante es mayor de:</b></td>"+
	 "<td> </td>" + "<td><b>"+	parseInt(promedio/10) + "</b></td> </tr>";
}
