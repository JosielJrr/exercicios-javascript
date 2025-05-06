// Recebendo as notas do aluno para cálculo da média e classificação 

const entradas = [5.5, 6.0, 7.5, 8.0]; // Notas simuladas
let i = 0;

function gets() {
    return i < entradas.length ? entradas[i++] : undefined;
}

function print(texto) {
    console.log(texto);
}

export { gets, print };

