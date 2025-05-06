// Recebendo notas, calculando a média e classificando o aluno 

const { gets, print } = require('./funcoes_auxiliares');

function calcularMedia() {
    let somaNotas = 0;
    let numeroNotas = 0;

    // Vamos receber as notas até que não tenha mais valores no array
    while (true) {
        const nota = gets();
        if (nota === undefined) break; // Se não houver mais notas, paramos
        somaNotas += nota;
        numeroNotas++;
    }

    return somaNotas / numeroNotas;
}

function classificarAluno(media) {
    if (media >= 7) {
        return 'Aprovado';
    } else if (media >= 5) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}

// Calculando a média e classificando
const media = calcularMedia();
const classificacao = classificarAluno(media);

print(`Média: ${media}`);
print(`Classificação: ${classificacao}`);
