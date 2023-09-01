var listaProdutos = document.getElementById('lista-produtos');


var produtos = []


window.addEventListener('load', function () {
    listaProdutos.innerHTML = '';
    produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    produtos.forEach(function (prod, index) {

        var div = document.createElement('div');
        div.classList.add('grid-item');
        div.innerHTML = `<img src="${prod.foto_prod}" alt="Foto do Produto">
                         <p><strong>Id do Produto:</strong> ${prod.id_prod}</p>
                         <p><strong>Nome do Produto:</strong> ${prod.nome_prod}</p>
                         <p><strong>Valor do Produto:</strong> ${prod.valor_prod}</p>`;

        var button = document.createElement('button');
        button.textContent = 'Excluir';
        button.addEventListener('click', function () {
            produtos.splice(index, 1);

            localStorage.setItem('produtos', JSON.stringify(produtos));

            listaProdutos.removeChild(div);
        });

        div.appendChild(button);

        listaProdutos.appendChild(div);
    });
});

