function calcular() {
    var valor = document.getElementById("valor").value;
    var quant = document.getElementById("quantidade").value;
    var desconto = document.getElementById("tipoPag").value;
    var resultado = document.getElementById("resultado");
    var total = 0;
    var valorBruto = 0;
    var valorDesconto = document.getElementById("desconto");


    if (quant < 1) {
        alert("Quantidade precisa ser maior que 0");
    } else{
        valorBruto = (valor * quant);
        if (desconto == "pix") {
            total = (valorBruto * 0.95).toFixed(2);
        }else if(desconto == "dinheiro") {
            total = (valorBruto * 0.90).toFixed(2); 
        }else if(desconto == "cartao"){
            total =valorBruto.toFixed(2); 
        }

        resultado.textContent = total; 
        valorDesconto.textContent= (valorBruto - total).toFixed(2);
    }

    

}