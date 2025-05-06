// Demonstração de declaração e escopo de variáveis (var, let, const)

// Hoisting com var: a variável é içada, mas seu valor é atribuído só depois
console.log(nome); // Saída: undefined
var nome = "Josiel"; // Fora de uma função, o var tem escopo global

function escopoVar() {
    var x = 10; // x é declarada no escopo da função

    if (true) {
        var x = 20; // mesma variável, valor reatribuído
        console.log(x); // Saída: 20
    }

    console.log(x); // Saída: 20 — escopo de var é a função inteira
}

escopoVar();

// -----------------------------------------------------------------------------------------------------

// let tem escopo de bloco, então pode ser reatribuída normalmente
let sobrenome = "Alves";
console.log(sobrenome); // Saída: Alves

sobrenome = "Silva"; // Reatribuição normal com let
console.log(sobrenome); // Saída: Silva

function escopoLet() {
    let y = 10; // y declarada no escopo da função

    if (true) {
        let y = 20; // nova y, válida apenas dentro do bloco
        console.log(y); // Saída: 20
    }

    console.log(y); // Saída: 10 — y do escopo da função
}

escopoLet();

// -----------------------------------------------------------------------------------------------------

// const deve ser inicializada na declaração e não pode ser reatribuída depois.
const idade = 25;
console.log(idade); // Saída: 25

function escopoConst() {
    const z = 10; // z declarada no escopo da função

    if (true) {
        const z = 20; // nova z, válida apenas dentro do bloco
        console.log(z); // Saída: 20
    }

    console.log(z); // Saída: 10 — z do escopo da função
}

escopoConst();

// Atribuição de const com objetos (para explicar mutabilidade)
const pessoa = { nome: "Josiel", idade: 25 };
console.log(pessoa); // Saída: { nome: 'Josiel', idade: 25 }

pessoa.idade = 26; // Podemos alterar o conteúdo do objeto, mas não reatribuir a variável
console.log(pessoa); // Saída: { nome: 'Josiel', idade: 26 }

