// Leitura de arquivos com Promises (Node.js)

import { promises } from 'fs';

// Lê o arquivo 'rotina.csv' de forma assíncrona usando Promise
const leituraArquivoPromise = promises.readFile('rotina.csv', 'utf-8');  // Converte o conteúdo do arquivo para texto (UTF-8)

// Manipulando a Promise
leituraArquivoPromise
    .then((texto) => console.log(texto))  // Exibe o conteúdo do arquivo
    .catch((error) => console.log("Deu ruim!", error));  // Trata erros caso a leitura falhe

// ----------------------------------------------------------------------------------------------------------------------
// Leitura de arquivos com async/await (Node.js)

// Definindo uma função assíncrona para buscar e ler o arquivo
async function buscarArquivo() {
    try {
        // Lendo o arquivo 'rotina.csv' de forma assíncrona usando await
        const arquivo = await promises.readFile('rotina.csv', 'utf-8');  // Passando 'utf-8' diretamente
        console.log(arquivo);
    } catch (error) {
        console.error('Erro ao ler o arquivo:', error);  // Tratando erros caso a leitura do arquivo falhe
    } finally {
        console.log('Finalizado');  // Executa sempre, independente de sucesso ou erro
    }
}

buscarArquivo();

// ----------------------------------------------------------------------------------------------------------------------
// Leitura de outro arquivo (dados.csv) usando Promises e async/await

const leituraDadosPromise = promises.readFile('dados.csv', 'utf-8');   // Converte o conteúdo do arquivo para texto (UTF-8)

leituraDadosPromise
    .then((texto) => console.log(texto))  // Exibe o conteúdo do arquivo
    .catch((error) => console.error('Erro ao ler o arquivo:', error));  // Trata erros caso a leitura falhe

async function buscarDados() {
    try {
        const dados = await promises.readFile('dados.csv', 'utf-8');  // Passando 'utf-8' diretamente
        console.log(dados);
    }
    catch (error) {
        console.error('Erro ao ler o arquivo:', error);
    }
    finally {
        console.log('Finalizado!');
    }
}

buscarDados();
