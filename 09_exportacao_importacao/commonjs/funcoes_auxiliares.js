// Recebendo as notas do aluno para cálculo da média e classificação 

const entradas = [5.5, 6.0, 7.5, 8.0]; // Exemplo de notas
let i = 0;

function gets() {
    const valor = entradas[i]; // Pega o valor da posição i no array
    i = i + 1;  // Incrementa i para pegar o próximo valor na próxima chamada
    return valor;  // Retorna o valor
}

function print(texto) {
    console.log(texto);
}

// Comando de exportação
module.exports = { gets, print };
