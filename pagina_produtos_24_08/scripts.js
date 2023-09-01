var form = document.getElementById('form');
var id = document.getElementById('idProduto');
var nome = document.getElementById('nome');
var foto = document.getElementById('foto');
var valor = document.getElementById('valor');
var peso = document.getElementById('peso');
var estoque = document.getElementById('estoque');
var cadastrar = document.getElementById('cadastro');
//var listaProdutos = document.getElementById('lista-produtos');

var produtos = []

var imgBase64;


function atualizarLista() {
  //listaProdutos.innerHTML = '';
  produtos.forEach((prod) => {
    var li = document.createElement('li');
    li.innerHTML = `<dl>
                            <dt>Id do Produto:</dt>
                            <dd>${prod.id_prod}</dd>
                            <dt>Nome do Produto:</dt>
                            <dd>${prod.nome_prod}</dd>
                            <dt>Foto do Produto:</dt>
                            <dd><img src="${prod.foto_prod}" alt="Foto do Produto"></dd>
                            <dt>Valor do Produto:</dt>
                            <dd>${prod.valor_prod}</dd>
                            <dt>Peso do Produto:</dt>
                            <dd>${prod.peso_prod}</dd>
                            <dt>Disponibilidade do Produto:</dt>
                            <dd>${prod.disp_prod}</dd>
                        </dl>`;


  })
}


form.addEventListener('submit', (event) => {
  produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  event.preventDefault();
  var idProd = id.value;
  //verificando o ID
  if (verificaId(idProd)) {
    alert('O ID existente. Por favor, digite outro ID.');
    return;
  }
  var nomeProd = nome.value;
  var fotoProd = imgBase64;
  var valorProd = valor.value;
  var pesoProd = peso.value;
  var estoqueProd = estoque.value;
  if (nomeProd) {
    produtos.push({ id_prod: idProd, nome_prod: nomeProd, foto_prod: fotoProd, valor_prod: valorProd, peso_prod: pesoProd, disp_prod: estoqueProd });

    localStorage.setItem('produtos', JSON.stringify(produtos));
    atualizarLista();
    id.value = '';
    nome.value = '';
    foto.value = '';
    valor.value = '';
    peso.value = '';
    estoque.value = '';
  }
});

cadastrar.addEventListener('click', () => {
  form.dispatchEvent(new Event('submit'));
});

foto.addEventListener("change", () => {
  var file = foto.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    var base64 = reader.result;
    imgBase64 = base64;
  }
  reader.readAsDataURL(file);
})

// função para verificar o ID

function verificaId(id) {
  for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].id_prod === id) {
      return true;
    }
  }
  return false;
}

