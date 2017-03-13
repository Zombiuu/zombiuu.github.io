// JavaScript source code
var xmlhttp = new XMLHttpRequest();
var url = "json/json.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
        var myArr = documentJson.Actividades;
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function destacado() {

}
function myFunction(arr) {
    var section = document.getElementById("id01");
    var fila = document.createElement("div");
    fila.setAttribute("class", "row");

    for (i = 0; i < arr.length; i++) {
        //VARIABLES//
        var proyecto = document.createElement("article");
        var footer = document.getElementById("id02");
        var imagen = document.createElement("img");
        var titulo = document.createElement("h2");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var enlace = document.createElement("a");
        var nodoTitulo = document.createTextNode(arr[i].Titulo);

        var nodoEnlace = document.createTextNode(arr[i].Link);
        var nodoVisitar = document.createTextNode("Visitar página");
        var etiquetai = document.createElement("i");
        var nodoDestacado = arr[i].Destacado

        //ATRIBUTOS//
        section.insertBefore(fila, footer);
        fila.appendChild(proyecto);
        etiquetai.setAttribute("class", "fa fa-star fa-3 destacado");
        etiquetai.setAttribute("aria-hidden", "true");
        etiquetai.setAttribute("id", "destacado");
        imagen.setAttribute("class", "img-circle");
        imagen.setAttribute("src", arr[i].Foto);
        imagen.setAttribute("alt", "imagen");
        imagen.setAttribute("width", "140");
        imagen.setAttribute("height", "140");
        enlace.setAttribute("target", "_blank");
        enlace.setAttribute("class", "btn btn-default");
        enlace.setAttribute("href", arr[i].Link);
        //Disponible o no
        if (arr[i].Disponible == false) {
            proyecto.setAttribute("class", "col-lg-4 noDisp");
        } else {
            proyecto.setAttribute("class", "col-lg-4");
        }




        titulo.appendChild(nodoTitulo);

        enlace.appendChild(nodoVisitar);
        proyecto.appendChild(imagen);
        proyecto.appendChild(titulo);
        proyecto.appendChild(p1);
        proyecto.appendChild(p2);
        //Destacado o no
        if (arr[i].Destacado == true) {
            proyecto.appendChild(etiquetai);
        }
        p2.appendChild(enlace);


        //INFO
        var newarr = arr[i].Grupal
       
        var lista = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        var li5 = document.createElement("li");
        var li6 = document.createElement("li");
        var nodoFecha = document.createTextNode("Fecha: " + arr[i].Fecha);
        var nodoResponsive = document.createTextNode("Responsive: " + arr[i].Responsive);
        var nodoAsig = document.createTextNode("Asignatura: " + arr[i].Asignaturas);
        var nodoVis = document.createTextNode("Resolución: " + arr[i].Visualizacion);
        var nodoDesc = document.createTextNode(arr[i].Descripcion);

        var comp = false;


        for (j = 0; j < newarr.length; j++) { 
            if (j == 0 ) {
                if (newarr.length == 1) {
                    var nodoGrupal = document.createTextNode("Autor/es: " + newarr[j].Nombre);
                } else {
                    var nodoGrupal = document.createTextNode("Autor/es: " + newarr[j].Nombre + ",");
                }
               
                
            } else {
                var nodoGrupal = document.createTextNode(newarr[j].Nombre);
                
                
            }

            
            lista.setAttribute("class", "lista");
            p1.appendChild(lista);
            lista.appendChild(li1);
            lista.appendChild(li2);
            lista.appendChild(li3);
            lista.appendChild(li4);
            lista.appendChild(li6);
            lista.appendChild(li5);

            li1.appendChild(nodoFecha);
            li2.appendChild(nodoAsig);
            li3.appendChild(nodoResponsive);
            li4.appendChild(nodoVis);
            li6.appendChild(nodoGrupal);
            li5.appendChild(nodoDesc);
        }






    }



}




























