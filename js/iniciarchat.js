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

// ----------------------------------------------
// MINTA - ¿QUE ES MINTA?
// ----------------------------------------------
function copiar3() {  // Cambiar en nombre de la función
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-3').innerText  // Cambiar en nombre del Id elemnent
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}

// ----------------------------------------------
// INDAGAR MEMBRESIA
// ----------------------------------------------
function copiar4() {  // Cambiar en nombre de la función
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-4').innerText  // Cambiar en nombre del Id elemnent
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}

// ----------------------------------------------
// INDAGAR MEMBRESIA
// ----------------------------------------------
function copiar5() {  // Cambiar en nombre de la función
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-5').innerText  // Cambiar en nombre del Id elemnent
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}