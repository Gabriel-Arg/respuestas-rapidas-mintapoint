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


//  -----------------------------------------------------------------------------------------
//           FUNCION PARA COPIAR TEXTO EN LOS MENSAJES
// ------------------------------------------------------------------------------------------

// function ejecutar(idelemento){
//     var aux = document.createElement("div");
//     aux.setAttribute("contentEditable", true);
//     aux.innerHTML = document.getElementById(idelemento).innerHTML;
//     aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
//     document.body.appendChild(aux);
//     aux.focus();
//     document.execCommand("copy");
//     document.body.removeChild(aux);
// }

//  -----------------------------------------------------------------------------------------
//           FUNCION PARA COPIAR TEXTO EN LOS MENSAJES
// ------------------------------------------------------------------------------------------

const button = document.querySelector('button.btn-copy');
const input = document.querySelector('input.colapso_mje_input');
const mensaje = document.querySelector('#mensaje')

button.addEventListener('click',function() {
    input.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

    mensaje.innerHTML = "Copiado"

    setTimeout(()=> mensaje.innerHTML ="", 3000);
}) 



