// ----------------------------------------------
// 177 -  ENCUESTA PARA INVITADO
// ----------------------------------------------
function copiar177() {       
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-177').innerText 
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}