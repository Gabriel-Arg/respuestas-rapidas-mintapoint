// ----------------------------------------------
// ASESOR1 - SALUDO INICIAL
// ----------------------------------------------
function copiar1() {       
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-1').innerText 
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}

// ----------------------------------------------
// ASESOR2 - PREGUNTAMOS
// ----------------------------------------------
function copiar2() {       
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-2').innerText 
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}