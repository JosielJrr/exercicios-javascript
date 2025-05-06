// Buscando dados de uma API usando async/await

async function buscarDados() {
    try {
        // Faz a requisição e espera pela resposta
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        // Converte o corpo da resposta em JSON
        const dados = await response.json();

        // Exibe os dados no console
        console.log("Dados recebidos:", dados); // Saída: Dados recebidos: { userId: 1, id: 1, title: "...", body: "..." }
    } catch (erro) {
        console.error("Erro na requisição:", erro); // Captura e exibe erros da requisição
    }
}

buscarDados();
