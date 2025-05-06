// Verificando a paridade do número
function verificarParidade(num) {
    return num % 2 === 0 ? `${num} é Par` : `${num} é Ímpar`;
}

console.log(verificarParidade(9));  // Saída: 9 é Ímpar

// ----------------------------------------------------------------------------------------------------------------------
// Verificando a maioridade

function verificarMaiorIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(verificarMaiorIdade(10));  // Saída: Menor de idade

// ----------------------------------------------------------------------------------------------------------------------
// Verificando a nota

function verificarNota(nota) {
    return nota >= 6 ? 'APROVADO' : 'REPROVADO';
}

console.log(verificarNota(9));  // Saída: APROVADO
