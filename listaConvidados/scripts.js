var form = document.getElementById('form');
var nomeInput = document.getElementById('nome');
var listaConvidados = document.getElementById('lista-convidados');

var convidados = [];

function atualizarLista() {
  listaConvidados.innerHTML = '';
  convidados.forEach((nome, index) => {
    var li = document.createElement('li');
    li.innerHTML = `${nome} <button class="devare-button" onclick="excluirConvidado(${index})">Excluir</button>`;
    listaConvidados.appendChild(li);
  });
}

function excluirConvidado(index) {
  convidados.splice(index, 1);
  atualizarLista();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  var nome = nomeInput.value;
  if (nome) {
    convidados.push(nome);
    atualizarLista();
    nomeInput.value = '';
  }
});

document.getElementById('adicionar').addEventListener('click', () => {
  form.dispatchEvent(new Event('submit'));
});



