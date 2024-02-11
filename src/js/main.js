function diaNoite() {
    let dia = true;

    if (dia) {
        console.log('Está claro');
    } else {
        console.log('Está de noite');
    }
}

function numerosPares() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}

function exibirMensagem() {
    console.log('Hello, World!');
}

function exibirNome(nome) {
    console.log('Meu nome é ' + nome);
}

function exibirInformacoes(nome, idade, estiloMusical) {
    console.log('Nome: ' + nome + ', Idade: ' + idade + ', Estilo Musical: ' + estiloMusical);
}

function exibirFilmeEMusica(filme, musica) {
    console.log('Filme: ' + filme + ', Música: ' + musica);
}

function triploDoNumero(numero) {
    return numero * 3;
}

document.getElementById("botao").onclick = function() {
    let resultado = triploDoNumero(15);
    console.log(resultado);
}


function verificarBooleano(valor) {
    if (valor === true) {
        console.log('A variável é verdadeira.');
    } else {
        console.log('A variável é falsa.');
    }
}

let meuArray = [1, 'dois', true, 'manoel', 5];

function array() {
    console.log(meuArray);
}

function addName() {
    meuArray.unshift('Gabriel');
    console.log(meuArray);
}

function removeName() {
    meuArray.pop();
    console.log(meuArray);
}

function addNameEnd() {
    meuArray.push('Thiago', 'Silva');
    console.log(meuArray);
}

function removeNameStart() {
    meuArray.shift();
    console.log(meuArray);
}

function addNameQuite() {
    meuArray.splice(3, 0, 'Dennis');
    console.log(meuArray);
}

function ordemCrescente() {
    let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
    numbers.sort(function (a, b) {
        return a - b;
    });
    console.log(numbers);
}

