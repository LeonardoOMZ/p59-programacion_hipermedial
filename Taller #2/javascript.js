function addrow()
{
    var titulo1 = document.getElementById("titulo").value;
    var Descripcion1 = document.getElementById("Descripcion").value;
    var genero1 = document.getElementById("genero").value;
    var table = document.getElementById("mytable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = titulo1;
    cell2.innerHTML = Descripcion1;
    cell3.innerHTML = genero1;
}