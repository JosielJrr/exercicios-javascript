// Implementando eventos:

// Evento onload:

window.onload = function () {
    console.log('Carregou o DOM'); // Saída: "Carregou o DOM"
};

// ----------------------------------------------------------------------------------------------------------------------
// Evento de click:

const botao = document.querySelector('#btn');

// Adiciona um event listener para o evento 'click' no botão
botao.addEventListener('click', function () {
    console.log('Clicou'); // Saída: "Clicou"
    this.textContent = 'Botão Clicado';
    this.style.cssText = 'color: green; background-color: red;';
});


// Click afetando outros elementos:
const titulo = document.querySelector('#title');
titulo.addEventListener('click', () => {
    const subtitulo = document.querySelector('.subtitle');
    subtitulo.style.display = 'none'; // Saída esperada: subtítulo desaparece da tela
});

// Double click:
const paragrafo = document.querySelector('#paragrafo');
paragrafo.addEventListener('dblclick', () => {
    paragrafo.style.color = 'green'; // Saída esperada: o texto do parágrafo fica verde
});

// ----------------------------------------------------------------------------------------------------------------------
// Eventos mouseover e mouseout:

const title = document.querySelector('#title');

// Adiciona um evento 'mouseover' ao elemento 'title'
title.addEventListener('mouseover', () => title.style.backgroundColor = 'pink');
// Saída esperada: Quando o mouse passar sobre o título, o fundo fica rosa

// Adiciona um evento 'mouseout' ao elemento 'title'
title.addEventListener('mouseout', () => title.style.backgroundColor = 'white');
// Saída esperada: Quando o mouse sair do título, o fundo volta a ser branco


const subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('mouseover', () => {
    const legenda = document.querySelector('#legenda');
    legenda.classList.remove('legenda');
    // Saída esperada: A classe 'legenda' é removida
});

subtitle.addEventListener('mouseout', () => {
    const legenda = document.querySelector('#legenda');
    legenda.classList.add('legenda');
    // Saída esperada: A classe 'legenda' é adicionada novamente
});

// ----------------------------------------------------------------------------------------------------------------------
// Eventos keydown e keyup:

document.addEventListener('keydown', (e) => {
    // Verifica se a tecla pressionada é 'Enter'
    if (e.key === 'Enter') {
        console.log('Apertou o Enter'); // Saída: "Apertou o Enter" quando a tecla 'Enter' for pressionada
    }
});

document.addEventListener('keyup', (e) => {
    // Verifica se a tecla liberada é 'Enter'
    if (e.key === 'Enter') {
        console.log('Soltou o Enter'); // Saída: "Soltou o Enter" quando a tecla 'Enter' for solta
    }
});
