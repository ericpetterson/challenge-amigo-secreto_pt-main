//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;

    if (amigo == '') {
        alert('Por favor, insira um nome');
        return;
    }
    let novaListaAmigos = listaAmigos.push(amigo);

    limparInput();
}


function limparInput() {
    document.querySelector('input').value = '';
}