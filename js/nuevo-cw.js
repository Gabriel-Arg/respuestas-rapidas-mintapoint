// ----------------------------------------------
// 181 -  CHECKING
// ----------------------------------------------
function copiar181() {       
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-181').innerText 
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}

// ----------------------------------------------
// 182 -  BIENVENIDA
// ----------------------------------------------
function copiar182() {       
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-182').innerText 
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}

// ----------------------------------------------
// 182b -  BIENVENIDA
// ----------------------------------------------
function copiar182b() {       
    // Crea un input para poder copiar el texto dentro       
    let copyText = document.getElementById('rr-182b').innerText 
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove() 
}