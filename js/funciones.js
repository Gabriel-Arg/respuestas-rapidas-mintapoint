//  -----------------------------------------------------------------------------------------
//           FUNCION PARA ABRIR Y CERRAR PESTAÑAS
// ------------------------------------------------------------------------------------------
function openCity(evt, cityName) {

    // DECLARA TODAS LAS VARIABLES-------------
    var i, tabcontent, tablinks;

    // OCULTA TODOS LOS ELEMENTOS CON CLASE= "tabcontent"------------
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // OBTIENE TODOS LOS ELEMENTOS CON CLASE= "tablinks" Y ELIMINA LA CLASE "active"-----------
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // MUESTRA LA PESTAÑA Y AGREGA UNA CLASE "activa" AL ENLACE QUE ABRIO LA PESTAÑA----------------
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//  -----------------------------------------------------------------------------------------
//           DEFINE AL ELEMENTO CON EL ID "defautOpen" COMO EL PREDETERMINADO AL CARGAR LA PAGINA
// ------------------------------------------------------------------------------------------
document.getElementById("defaultOpen").click();