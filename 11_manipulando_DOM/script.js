// Formas de acessar o DOM:

// // 1-Selecionando o elemento pela tag HTML:
// let titulo = document.getElementsByTagName('h1')[0];
// console.log(titulo); // Saída: <h1 id="title">Título principal</h1>

// // 2-Selecionando por ID:
// let paragrafo = document.getElementById('paragrafo');
// console.log(paragrafo); // Saída: <p id="paragrafo">...</p>

// // 3-Selecionando a classe:
// let subtitulo = document.getElementsByClassName('subtitle')[0];
// console.log(subtitulo); // Saída: <h2 class="subtitle">...</h2>

// // 4-Selecionando elementos usando seletores CSS:
// let itensLista = document.querySelectorAll('#lista li');
// console.log(itensLista); // Saída: NodeList(4) [<li>...</li>, <li>...</li>, ...]

// let lista = document.querySelector('#lista2');
// console.log(lista); // Saída: <ul id="lista2">...</ul>

// let span = document.querySelector('#paragrafo span');
// console.log(span); // Saída: <span>...</span> (dentro do #paragrafo)

// ----------------------------------------------------------------------------------------------------------------------
// Alterando conteúdo de elementos no DOM:

// // textContent: Altera apenas o conteúdo textual do elemento.
// let titulo = document.querySelector('#title');
// titulo.textContent = 'Novo título';
// console.log(titulo); // Saída: <h1 id="title">Novo título</h1>

// // innerHTML: Altera tanto o conteúdo textual quanto as tags HTML dentro de um elemento.
// let lista2 = document.querySelector('#lista2');
// lista2.innerHTML = '<li>Único item da lista</li>';
// console.log(lista2); // Saída: <ul id="lista2"><li>Único item da lista</li></ul>

// // Altera apenas o conteúdo textual também:
// let subtitulo = document.querySelector('.subtitle');
// subtitulo.innerHTML = 'Novo subtitulo';
// console.log(subtitulo); // Saída: <h2 class="subtitle">Novo subtitulo</h2>

// ----------------------------------------------------------------------------------------------------------------------
// Criando elementos no DOM:

// let novoParagrafo = document.createElement('p');  // Cria um novo elemento <p>
// let texto = document.createTextNode('Conteúdo do parágrafo criado'); // Cria um novo nó de texto
// novoParagrafo.appendChild(texto); // Adiciona o texto ao parágrafo
// let body = document.querySelector('body');
// body.appendChild(novoParagrafo); // Adiciona o parágrafo ao corpo do html
// console.log(novoParagrafo); // Saída: <p>Conteúdo do parágrafo criado</p>

// let container = document.querySelector('#container');

// const span = document.createElement('span');
// const conteudo = document.createTextNode('Conteúdo do span');
// span.appendChild(conteudo);
// container.appendChild(span);
// console.log(span); // Saída: <span>Conteúdo do span</span>

// /* Para adicionar listas com vários itens, é mais simples usar innerHTML
//    do que criar cada elemento com createElement e createTextNode. */

// container.innerHTML +=
// `<ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>`;

// console.log(container); // Saída: <div id="container"><span>...</span><ul>...</ul></div>

// ----------------------------------------------------------------------------------------------------------------------
// Removendo elementos no DOM:

// // Removendo elemento filho:
// const container = document.querySelector('#container');
// const p = document.querySelector('#container p');
// container.removeChild(p);
// console.log(container); // Saída: <div id="container">... (sem o <p>)</div>

// // Removendo o elemento:
// const subtitulo = document.querySelector('.subtitle');
// subtitulo.remove();
// console.log(subtitulo); // Saída: null (se tentar selecionar depois da remoção)

// ----------------------------------------------------------------------------------------------------------------------
// Inserindo elementos no DOM:

// // Cria um elemento <div> e define seu texto interno
// const div = document.createElement('div');
// div.textContent = 'div aqui';

// // Seleciona o contêiner onde você deseja adicionar elementos
// const container = document.querySelector('#container');
// container.appendChild(div); // Adiciona a <div> ao final do contêiner
// console.log(container); // Saída: <div id="container">...<div>div aqui</div></div>

// // Cria um elemento <p> e define seu texto interno
// const paragrafo = document.createElement('p');
// paragrafo.textContent = 'parágrafo aqui';

// // Insere o <p> antes da <div> no contêiner
// container.insertBefore(paragrafo, div);
// console.log(container); // Saída: <div id="container"><p>parágrafo aqui</p><div>div aqui</div></div>

// ----------------------------------------------------------------------------------------------------------------------
// Substituindo elementos no DOM:

// const subtitulo = document.querySelector('.subtitle'); // Seleciona o elemento com a classe 'subtitle'

// const novoSubtitulo = document.createElement('h2');  // Cria um novo elemento <h2>
// const texto = document.createTextNode('Novo subtítulo');  // Cria um nó de texto com o conteúdo 'Novo subtítulo'
// novoSubtitulo.appendChild(texto); // Adiciona o nó de texto como filho do novo elemento <h3>

// const pai = subtitulo.parentNode; // Obtém o pai do elemento 'subtitulo'

// // Substitui 'subtitulo' pelo 'novoSubtitulo' no pai
// pai.replaceChild(novoSubtitulo, subtitulo);
// console.log(novoSubtitulo); // Saída: <h3>Novo subtítulo</h3>

// ----------------------------------------------------------------------------------------------------------------------
// Adicionando e removendo atributos do elemento no DOM:

// const titulo = document.querySelector('#title');
// titulo.setAttribute('class', 'test');
// console.log(titulo); // Saída: <h1 id="title" class="test">...</h1>

// const botao = document.querySelector('#btn');
// botao.setAttribute('disabled', 'disabled');
// console.log(botao); // Saída: <button id="btn" disabled="disabled">...</button>

// // Método exclusivo para a adição de classes:
// botao.classList.add('button');
// console.log(botao.className); // Saída: "button" (ou "test button" se já tiver outra classe)

// // Remover atributo
// botao.removeAttribute('disabled');
// console.log(botao); // Saída: <button id="btn" class="button">...</button>

// ----------------------------------------------------------------------------------------------------------------------
// Adicionando CSS diretamente no DOM:

// const titulo = document.querySelector('#title');
// titulo.style.color = 'blue';
// console.log(titulo); // Saída: <h1 id="title" style="color: blue;">...</h1>

// const subtitulo = document.querySelector('.subtitle');
// subtitulo.style.backgroundColor = 'red';
// console.log(subtitulo); // Saída: <h2 class="subtitle" style="background-color: red;">...</h2>

// // Altera múltiplos estilos usando cssText
// subtitulo.style.cssText = 'color: blue; background-color: pink; font-size: 50px';
// console.log(subtitulo); // Saída: <h2 class="subtitle" style="color: blue; background-color: pink; font-size: 50px;">...</h2>

// ----------------------------------------------------------------------------------------------------------------------
// Propriedades do DOM:

// Acessando e alterando partes do DOM através de suas propriedades:

// console.log(document.head); // Saída: <head>...</head>

// console.log(document.body); // Saída: <body>...</body>

// console.log(document.title); // Saída: "Manipulando o DOM"
// document.title = 'Novo Título';
// console.log(document.title); // Saída: "Novo Título"

// console.log(document.URL); // Saída: URL da página atual

// console.log(document.links); // Saída: NodeList de todos os links na página
// document.links[0].textContent = 'YouTube';
// console.log(document.links[0]); // Saída: <a href="..." class="...">YouTube</a>
