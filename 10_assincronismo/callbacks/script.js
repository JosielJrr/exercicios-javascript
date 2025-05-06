// Buscando dados do usuário com callback

function buscarDadosDoUsuario(id, callback) {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.json();     // Converte a resposta para JSON
        })
        .then((dados) => {
            callback(null, dados);     // Chama o callback com os dados do usuário
        })
        .catch((erro) => {
            callback(erro, null);       // Chama o callback com erro, se acontecer
        });
}

// Função callback que exibe os dados ou trata o erro
function exibirDadosDoUsuario(erro, dados) {
    if (erro) {
        console.error("Erro ao buscar dados:", erro);
    } else {
        console.log("Dados do usuário:", dados); // Saída: { id: 1, name: 'Leanne Graham', ... }
    }
}

// Chama a função para buscar dados de um usuário específico
buscarDadosDoUsuario(1, exibirDadosDoUsuario);


/*
NOTA:
Embora o uso de callbacks ainda funcione e seja suportado no JavaScript (e em APIs como `fetch`),
a abordagem mais moderna e legível hoje é usar `async/await` para lidar com operações assíncronas.

Usar `async/await` traz vantagens como:
- Código mais limpo e fácil de entender
- Fluxo sequencial mais intuitivo
- Tratamento de erros mais direto com `try/catch`

Callbacks ainda são úteis em alguns cenários, mas para a maioria das aplicações modernas,
especialmente com Promises e APIs assíncronas, `async/await` é o padrão recomendado.
*/
