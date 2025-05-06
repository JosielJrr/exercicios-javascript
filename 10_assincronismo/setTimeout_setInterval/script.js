// Exemplo de uso do setTimeout com clearTimeout (execução assíncrona)

console.log('Início');

const idDoTimeout = setTimeout(() => {
    console.log('Executado após 5 segundos (setTimeout)');
}, 5000);

console.log('Agendado setTimeout');

// // Simula uma condição que cancela o timeout antes dos 5s
// const cancelar = true;

// if (cancelar) {
//     clearTimeout(idDoTimeout);
//     console.log('Timeout cancelado antes de executar');
// }

// ----------------------------------------------------------------------------------------------------------------------
// Exemplo de uso do setInterval com clearInterval

// Executa repetidamente uma função a cada 1 segundo
const idDoIntervalo = setInterval(() => {
    console.log('Executando repetidamente com setInterval');
}, 1000);

// Cancela a repetição após 5 segundos
setTimeout(() => {
    console.log('Encerrando a repetição com clearInterval');
    clearInterval(idDoIntervalo);
}, 5000);
