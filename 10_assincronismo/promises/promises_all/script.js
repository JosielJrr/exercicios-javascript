// Buscando múltiplos dados de uma API usando Promise.all

async function buscarMultiplosDados() {
    try {
        // URLs que vamos buscar em paralelo
        const urls = [
            'https://jsonplaceholder.typicode.com/posts/1',
            'https://jsonplaceholder.typicode.com/users/1',
            'https://jsonplaceholder.typicode.com/comments/1',
        ];

        // Mapeia as URLs e dispara os fetchs em paralelo
        const respostas = await Promise.all(urls.map(url => fetch(url)));

        // Verifica se todas as respostas foram OK
        respostas.forEach((res) => {
            if (!res.ok) throw new Error(`Erro em uma das requisições: ${res.status}`);
        });

        // Converte todas as respostas para JSON em paralelo
        const dados = await Promise.all(respostas.map(res => res.json()));

        // Exibe os dados recebidos
        console.log("Post:", dados[0]); // Saída: Post: { userId: 1, id: 1, title: "...", body: "..." }
        console.log("Usuário:", dados[1]); // Saída: Usuário: { id: 1, name: "...", username: "..." }
        console.log("Comentário:", dados[2]); // Saída: Comentário: { postId: 1, id: 1, name: "...", email: "..." }
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro); // Captura e exibe erros ao buscar dados
    }
}

buscarMultiplosDados(); 
