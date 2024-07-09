//Formas de acessar o DOM:

// // 1-Selecionando o elemento pela tag HTML:
// let titulo = document.getElementsByTagName('h1')[0];
// console.log(titulo);

// // 2-Selecionando por ID:
// let paragrafo = document.getElementById('paragrafo');
// console.log(paragrafo);

// // 3-Selecionando a Classe:
// let subtitulo = document.getElementsByClassName('subtitle')[0];
// console.log(subtitulo);

// // 4-Selecionando elementos usando seletores CSS:
// let itensLista = document.querySelectorAll('#lista li');
// console.log(itensLista);

// let lista = document.querySelector('#lista2');
// console.log(lista);

// let span = document.querySelector('#paragrafo span');
// console.log(span);

// ----------------------------------------------------------------------------------------------------------------------

// Alterar conteúdo do elemento com DOM:

// //textContent: Altera apenas o conteúdo textual do elemento.
// let titulo = document.querySelector('#title');
// titulo.textContent = 'Novo título';
// console.log(titulo);

// //innerHTML: Altera tanto o conteúdo textual quanto as tags HTML dentro de um elemento.
// let lista2 = document.querySelector('#lista2');
// lista2.innerHTML = '<li>Único item da lista</li>';
// console.log(lista2);

// // Altera apenas o conteúdo textual também:
// let subtitulo = document.querySelector('.subtitle');
// subtitulo.innerHTML = 'Novo subtitulo';
// console.log(subtitulo);

// ----------------------------------------------------------------------------------------------------------------------

// Criar elementos com DOM:

// // Cria um novo elemento <p>:
// let novoParagrafo = document.createElement('p');

// // Cria um novo nó de texto:
// let texto = document.createTextNode('Conteúdo do parágrafo criado');

// // Adiciona o texto ao parágrafo:
// novoParagrafo.appendChild(texto);

// let body = document.querySelector('body');

// // Adiciona o parágrafo ao corpo do html:
// body.appendChild(novoParagrafo);

// let container = document.querySelector('#container');

// const span = document.createElement('span');
// const conteudo = document.createTextNode('Conteúdo do span');
// span.appendChild(conteudo);
// container.appendChild(span);

// ----------------------------------------------------------------------------------------------------------------------

//Remover elementos com DOM:

// // Removendo elemento filho:
// const container = document.querySelector('#container');
// const p = document.querySelector('#container p');
// container.removeChild(p);

// // Removendo o elemento:
// const subtitulo = document.querySelector('.subtitle');
// subtitulo.remove();

// ----------------------------------------------------------------------------------------------------------------------

// Inserir elementos com DOM:

// // Cria um elemento <div> e define seu texto interno
// const div = document.createElement('div');
// div.textContent = 'div aqui';

// // Seleciona o contêiner onde você deseja adicionar elementos
// const container = document.querySelector('#container');
// container.appendChild(div); // Adiciona a <div> ao final do contêiner

// // Cria um elemento <p> e define seu texto interno
// const paragrafo = document.createElement('p');
// paragrafo.textContent = 'paragrafo aqui';

// // Insere o <p> antes da <div> no contêiner
// container.insertBefore(paragrafo, div);

// ----------------------------------------------------------------------------------------------------------------------

// Trocar elementos com DOM - replaceChild:

// // Seleciona o elemento com a classe 'subtitle'
// const subtitulo = document.querySelector('.subtitle');

// // Cria um novo elemento <h3>
// const novoSubtitulo = document.createElement('h3');

// // Cria um nó de texto com o conteúdo 'Novo subtítulo'
// const texto = document.createTextNode('Novo subtítulo');

// // Adiciona o nó de texto como filho do novo elemento <h3>
// novoSubtitulo.appendChild(texto);

// // Obtém o pai do elemento 'subtitulo'
// const pai = subtitulo.parentNode;

// // Substitui 'subtitulo' pelo 'novoSubtitulo' no pai
// pai.replaceChild(novoSubtitulo, subtitulo);

// ----------------------------------------------------------------------------------------------------------------------

// Adicionar e remover atributo do elemento com o DOM:

// const titulo = document.querySelector('#title');
// titulo.setAttribute('class', 'test');

// const botao = document.querySelector('#btn');
// botao.setAttribute('disabled', 'disabled');

// // // remover atributo
// // botao.removeAttribute('disabled');

// ----------------------------------------------------------------------------------------------------------------------

// Adicionar CSS pelo DOM:

// // Seleciona o elemento com o ID 'title' e altera a cor do texto para azul
// const titulo = document.querySelector('#title');
// titulo.style.color = 'blue';

// // Seleciona o elemento com a classe 'subtitle' e altera o fundo para vermelho
// const subtitulo = document.querySelector('.subtitle');
// subtitulo.style.backgroundColor = 'red';

// // Altera múltiplos estilos do elemento 'subtitulo' usando cssText
// subtitulo.style.cssText = 'color: blue; background-color: pink; font-size: 50px';

// ----------------------------------------------------------------------------------------------------------------------
