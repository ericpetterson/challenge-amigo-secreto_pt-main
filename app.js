//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let nomesJaSorteados = [];
let nomeUsado = [];


// Adiciona o evento de teclado ao input
document.getElementById('amigo').addEventListener('keydown', function (event) {
    if (event.key == 'Enter') { 
        adicionarAmigo(); 
    }
});

function adicionarAmigo() {
    let amigoInserido = document.querySelector('#amigo').value.trim();

    if (amigoInserido == '') {
        alert('Por favor, insira um nome');
        return;
    }
    listaAmigos.push(amigoInserido);
    localStorage.setItem('listaAmigos', JSON.stringify(listaAmigos));

    limparInput();
    exibirLista();
}

function irParaSorteador() {
    window.location.href = 'sorteador.html'; 
}

function exibirLista() {
    listaAmigos = JSON.parse(localStorage.getItem('listaAmigos')) || []; // Recupera do localStorage
    let amigos = document.getElementById('listaAmigos');
    amigos.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        amigos.innerHTML += '<li>' + listaAmigos[i] + '</li>';
    }
}

window.onload = exibirLista;


function nomeSorteador() {
    let amigoSorteador = document.querySelector('#pessoa').value.trim();

    if (amigoSorteador == '') {
        alert('Por favor, insira um nome');
        return;
    } else if (!listaAmigos.includes(amigoSorteador)) {
        alert('Esse amigo ainda não foi adicionado, Por favor informe um amigo existente');
        return;
    } else if (nomeUsado.length == listaAmigos.length) {
        alert('Todos os amigos ja receberam o amigo secreto');
        return;
    } else if (nomeUsado.includes(amigoSorteador)) {
        alert('Esse amigo ja recebeu o amigo secreto');
        return;
    }

    let listaParaSorteio = listaAmigos.filter(nome => nome != amigoSorteador && !nomesJaSorteados.includes(nome));

    if (listaParaSorteio.length == 0) {
        alert('Todos os amigos ja receberam o amigo secreto');
        return;
    }

    sortearAmigo(amigoSorteador, listaParaSorteio);
    nomeUsado.push(amigoSorteador);
}

function sortearAmigo(amigoSorteador, listaParaSorteio) {
    
    let amigoSorteado = listaParaSorteio[Math.floor(Math.random() * listaParaSorteio.length)];    
    nomesJaSorteados.push(amigoSorteado);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'O seu amigo secreto é: ' + amigoSorteado;
}


function limparInput() {
    document.querySelector('input').value = '';
}

function limparLista() {
    listaAmigos = [];
    localStorage.removeItem('listaAmigos');
    exibirLista();

}

 function proximoAmigo() {
     document.querySelector('input').value = '';
     document.getElementById('resultado').innerHTML = '';
     exibirLista();
 }
