// // Exemplo de uma função assíncrona simulada que retorna uma Promise
// function exemploPromise() {
//     return new Promise((resolve, reject) => {
//         // Simulando uma operação assíncrona, como uma requisição HTTP
//         setTimeout(() => {
//             const sucesso = true; // Simulando o sucesso da operação
//             if (sucesso) {
//                 resolve('Dados foram recebidos com sucesso.'); // Resolve a Promise com sucesso
//             } else {
//                 reject('Falha ao receber dados.'); // Rejeita a Promise em caso de falha
//             }
//         }, 2000); // Simula um tempo de espera de 2 segundos
//     });
// }

// // Utilizando a Promise
// console.log('Início da operação assíncrona.');
// exemploPromise()
//     .then((resultado) => {
//         console.log('Sucesso:', resultado); // Executa se a Promise foi resolvida com sucesso
//     })
//     .catch((erro) => {
//         console.error('Erro:', erro); // Executa se a Promise foi rejeitada
//     })
//     .finally(() => {
//         console.log('Finalizado!'); // Sempre é executado, independente de sucesso ou falha
//     });

// console.log('Operação assíncrona iniciada.'); // Executado antes da Promise ser resolvida

// ----------------------------------------------------------------------------------------------------------------------


// const minhaPromise = new Promise((resolve, reject) => {
//     // Operação assíncrona
//     let sucesso = true; // Suponha que a operação foi bem-sucedida

//     if (sucesso) {
//         resolve("A operação foi bem-sucedida!");
//     } else {
//         reject("A operação falhou.");
//     }
// });

// // Usando a promise
// minhaPromise
//     .then((mensagem) => console.log(mensagem))
//     .catch((erro) => console.error(erro))

// ----------------------------------------------------------------------------------------------------------------------

// // MANIPULAÇÃO DE ARQUIVOS NODE.JS (FILE SYSTEM)

// // Importando o módulo 'fs' do Node.js
// const fs = require('fs');

// // Criando uma promessa para ler o arquivo 'rotina.csv'
// const promessaDaLeituraArquivo = fs.promises.readFile('rotina.csv');

// // Manipulando a promessa
// promessaDaLeituraArquivo
//     // Quando a leitura do arquivo for bem-sucedida, converte o buffer para uma string UTF-8
//     .then((arquivo) => arquivo.toString('utf-8'))
//     // Quando a conversão for bem-sucedida, imprime o texto no console
//     .then((texto) => console.log(texto))
//     // Captura qualquer erro que ocorra durante o processo
//     .catch((error) => console.log("Deu ruim!", error));

// ----------------------------------------------------------------------------------------------------------------------

// // MANIPULAÇÃO DE ARQUIVOS NODE.JS (FILE SYSTEM) com async e await:

// // Importando o módulo fs do Node.js
// const fs = require('fs');

// // Definindo uma função assíncrona para buscar e ler o arquivo
// async function buscarArquivo() {
//     try {
//         // Lendo o arquivo 'rotina.csv' de forma assíncrona usando await
//         const arquivo = await fs.promises.readFile('rotina.csv');

//         // Convertendo o conteúdo do arquivo para uma string UTF-8
//         const textoDoArquivo = arquivo.toString('utf-8');

//         // Exibindo o texto do arquivo no console
//         console.log(textoDoArquivo);
//     } catch (error) {
//         // Capturando e tratando erros caso a leitura do arquivo falhe
//         console.error('Erro ao ler o arquivo:', error);
//     } finally {
//         // Ação final que sempre será executada, independentemente de sucesso ou falha
//         console.log('Finalizado');
//     }
// }

// // Chamando a função buscarArquivo para executar a leitura do arquivo
// buscarArquivo();

// ----------------------------------------------------------------------------------------------------------------------

// Exemplo 2 - Dados: 

// const fs = require('fs');

// const arquivo = fs.promises.readFile('dados.csv')

// arquivo
//     .then((dados) => dados.toString('utf-8'))
//     .then((texto) => console.log(texto))
//     .catch((error) => console.error('Erro ao ler o arquivo:', error))

// ----------------------------------------------------------------------------------------------------------------------

// const fs = require('fs');

// async function buscarArquivo() {
//     try{
//         const arquivo = await fs.promises.readFile('dados.csv')
//         const textoDoArquivo = arquivo.toString('utf-8')
//         console.log(textoDoArquivo)
//     }
//     catch (error){
//         console.error('Erro ao ler o arquivo:', error)
//     }
//     finally{
//         console.log('Finalizado!')
//     }
// }

// buscarArquivo()

// ----------------------------------------------------------------------------------------------------------------------