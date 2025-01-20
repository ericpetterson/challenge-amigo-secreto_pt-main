//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let amigoInserido = document.querySelector('#amigo').value.trim();

    if (amigoInserido == '') {
        alert('Por favor, insira um nome');
        return;
    }
    listaAmigos.push(amigoInserido);

    limparInput();
    console.log(listaAmigos);
    exibirLista();
}



function exibirLista() {
    let amigos = document.getElementById('listaAmigos');
    amigos.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        amigos.innerHTML += '<li>' + listaAmigos[i] + '</li>';
    }
}

function nomeSorteador() {
    let amigoSorteador = document.querySelector('#pessoa').value.trim();

    if (amigoSorteador == '') {
        alert('Por favor, insira um nome');
        return;
    } else if (!listaAmigos.includes(amigoSorteador)) {
        alert('Esse amigo ainda não foi adicionado, Por favor informe um amigo existente');
        return;
    } else {
        sortearAmigo(amigoSorteador);
    }
}

function sortearAmigo(amigoSorteador) {
    let listaParaSorteio = listaAmigos.filter(nome => nome != amigoSorteador);
    let amigoSorteado = listaParaSorteio[Math.floor(Math.random() * listaParaSorteio.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'O seu amigo secreto é: ' + amigoSorteado;
}


function limparInput() {
    document.querySelector('input').value = '';
}

function limparLista() {
    listaAmigos = [];
    exibirLista();
}