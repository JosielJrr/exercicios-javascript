
// SetTimeOut:

// console.log('Antes do setTimeOut');

// // Cria execução com um delay de 5000 (5 segundos) - execução assincrona.
// setTimeout(function () {
//     console.log('Testando setTimeOut');
// }, 500);

// console.log('Depois do setTimeOut');

// ----------------------------------------------------------------------------------------------------------------------

// let num = 0;

// const myTimeOut = setTimeout(() => console.log('O número é 0'), 3000);

// num = 9;

// // Forma de cancelar a execução agendada com o clearTimeout.
// if (num > 0) {
//     console.log('O número não é mais 0');
//     clearTimeout(myTimeOut);
// }

// ----------------------------------------------------------------------------------------------------------------------

// SetInterval:

// // Executa repetidamente uma função em intervalos fixos:
// const myInterval = setInterval(() => console.log('Testando setInterval'), 1000);

// // Forma de cancelar a repetição com o clearInterval.
// setTimeout(() => {
//     console.log('Não precisamos mais repetir');
//     clearInterval(myInterval);
// }, 3000);

// ----------------------------------------------------------------------------------------------------------------------