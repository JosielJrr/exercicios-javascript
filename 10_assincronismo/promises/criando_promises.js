// Criando uma Promise

function buscarComAtraso(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Erro HTTP: ${response.status}`);
                    }
                    return response.json();
                })
                .then(resolve)
                .catch(reject);
        }, 2000);      // Simula 2s de atraso
    });
}

buscarComAtraso('https://jsonplaceholder.typicode.com/posts/1')
    .then((dados) => {
        console.log("Dados com atraso:", dados);
    })
    .catch((erro) => {
        console.error("Erro:", erro);
    })
    .finally(() => {
        console.log("Operação finalizada (com atraso).");
    });