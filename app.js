//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;

    if (amigo == '') {
        alert('Por favor, insira um nome');
        return;
    }
    listaAmigos.push(amigo);

    limparInput();
    console.log(listaAmigos);
    exibirLista();
}

function sortearAmigo() {
    let amigo = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'O seu amigo secreto é: ' + amigo;
}

function exibirLista() {
    let amigos = document.getElementById('listaAmigos');
    amigos.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        amigos.innerHTML += '<li>' + listaAmigos[i] + '</li>';
    }
}

function limparInput() {
    document.querySelector('input').value = '';
}

function limparLista() {
    listaAmigos = [];
    exibirLista();
}