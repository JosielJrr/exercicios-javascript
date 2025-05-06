// Recebendo notas, calculando a média e classificando o aluno 

import { gets, print } from './funcoes_auxiliares.mjs';

// Função para calcular a média
function calcularMedia() {
    let somaNotas = 0;
    let numeroNotas = 0;

    while (true) {
        const nota = gets();
        if (nota === undefined) break;
        somaNotas += nota;
        numeroNotas++;
    }

    return somaNotas / numeroNotas;
}

// Função para classificar a média
function classificarAluno(media) {
    if (media >= 7) {
        return 'Aprovado';
    } else if (media >= 5) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}

const media = calcularMedia();
const classificacao = classificarAluno(media);

print(`Média: ${media}`);            // Saída: Média: 6.75
print(`Classificação: ${classificacao}`); // Saída: Classificação: Recuperação


/*
NOTA:
Embora o Node.js ainda ofereça suporte ao modelo de importação CommonJS (`require`, `module.exports`),
o padrão mais moderno e alinhado com o JavaScript atual é usar ES Modules (`import`, `export`).

Para usar ES Modules no Node.js, é necessário:
- Usar arquivos com extensão `.mjs`, ou
- Declarar `"type": "module"` no `package.json` (se quiser manter `.js`)

Isso é importante porque o Node, por padrão, ainda trata `.js` como CommonJS — e precisa de uma dessas opções
pra saber que você está usando ES Modules.
*/

