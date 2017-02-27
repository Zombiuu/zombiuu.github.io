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

function myFunction(arr) {
    var section = document.getElementById("id01");
    var fila = document.createElement("div");
    fila.setAttribute("class", "row");
    
    for (i = 0; i < arr.length; i++) {
        var proyecto = document.createElement("article");
        var footer = document.getElementById("id02");
        section.insertBefore(fila, footer);
            fila.appendChild(proyecto);
            var imagen = document.createElement("img");
            var titulo = document.createElement("h2");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var enlace = document.createElement("a");
            var nodoTitulo = document.createTextNode(arr[i].Titulo);
            var nodoDesc = document.createTextNode(arr[i].Descripcion);
            var nodoEnlace = document.createTextNode(arr[i].Link);
            var nodoVisitar = document.createTextNode("Visitar página");
            imagen.setAttribute("class","img-circle");
            imagen.setAttribute("src",arr[i].Foto);
            imagen.setAttribute("alt","imagen");
            imagen.setAttribute("width","140");
            imagen.setAttribute("height", "140");

            enlace.setAttribute("target", "_blank");
            titulo.appendChild(nodoTitulo);
            p1.appendChild(nodoDesc);
            enlace.setAttribute("class", "btn btn-default");
            enlace.setAttribute("href", arr[i].Link);
            proyecto.setAttribute("class", "col-lg-4");
            enlace.appendChild(nodoVisitar);


            proyecto.appendChild(imagen);
            proyecto.appendChild(titulo);
            proyecto.appendChild(p1);
            proyecto.appendChild(p2);
            p2.appendChild(enlace);
            

        }
    


 }




























