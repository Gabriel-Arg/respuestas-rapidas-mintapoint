// ----------------------------------------------
// 40 - INFORMACION DE LA MEMBRESIA
// ----------------------------------------------
function copiar40() {       
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-40').innerText 
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}