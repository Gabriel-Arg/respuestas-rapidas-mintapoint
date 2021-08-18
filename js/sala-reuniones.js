// ----------------------------------------------
// 144 - RECOMENDACION 1
// ----------------------------------------------
function copiar144() {       
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-144').innerText 
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}