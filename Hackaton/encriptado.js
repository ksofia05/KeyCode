const textoCifrado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~"; // Asegúrate de que la cadena esté correctamente cerrada.

const sustituciones = {
    '^': 'm',
    '(': '-',
    ')': '-',
    '?': 'a',
    '[': 'e',
    '\\': 'i',
    '~': 'o',
    '*': 'p',
    '/': 'l',
    '+': 'u',
    '`': 'c',
    '-': 'h',
    '#': 'v',
    '$': 'r',
    '%': 'b',
    ']': 'n',
    '{': 's',
    '}': 'q',
    '=': 't',
    '¡': 'd',
    '¿': 'y',
    '¬': 'ó',
    '_': 'z',
    ';': 'f',
    '!': 'j'
};

function descifrar(texto) {
    let textoDescifrado = '';

    for (let caracter of texto) {
        if (sustituciones[caracter]) {
            const letraDescifrada = sustituciones[caracter];
            textoDescifrado += `<span class="caracter">${letraDescifrada}<span>${caracter}</span></span>`;
        } else {
            textoDescifrado += `<span class="caracter">${caracter}<span>${caracter}</span></span>`;
        }
    }

    return textoDescifrado;
}

const resultado = descifrar(textoCifrado);
document.getElementById('resultado').innerHTML = resultado;
