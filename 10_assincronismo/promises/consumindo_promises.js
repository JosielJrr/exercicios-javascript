// Consumindo uma Promise

function buscarDadosPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then((dados) => {
            console.log("Dados recebidos:", dados);
        })
        .catch((erro) => {
            console.error("Erro na requisição:", erro);
        })
        .finally(() => {
            console.log("Requisição finalizada.");
        });
}

buscarDadosPost();


/*
NOTA:
A maioria das APIs modernas já retorna Promises (exemplo:fetch, axios), facilitando o manuseio de operações assíncronas.
Essas Promises podem ser tratadas de forma simples com `.then()`, ou de maneira mais moderna e legível com `async/await`.
*/