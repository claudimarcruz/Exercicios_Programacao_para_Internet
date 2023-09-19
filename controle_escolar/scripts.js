$(document).ready(function() {
    $('#botao_exibir').click(function() {
        //xpto
        var nota1 = $('#nota1').val();
        var falta1 = $('#falta1').val();

        var nota2 = $('#nota2').val();
        var falta2 = $('#falta2').val();

        var nota3 = $('#nota3').val();
        var falta3 = $('#falta3').val();

        var nota4 = $('#nota4').val();
        var falta4 = $('#falta4').val();

        var notas_xpto = [nota1, nota2, nota3, nota4];
        var faltas_xpto = [falta1, falta2, falta3, falta4];

        if(validarNotas(notas_xpto, 0, 25) && validarFaltas(faltas_xpto, 0, 100)) {
            //calculo das notas
            calculoTotalNota(notas_xpto);
        
            //calculo das faltas
            calculoTotalFaltas(faltas_xpto);

            // mostrar situação
            exibeSituacao(calculoTotalNota(notas_xpto),calculoTotalFaltas(faltas_xpto));
        }
    
    
    });  
});


function calculoTotalNota(valores) {
    var nota_f = 0;
    for(var i = 0; i < valores.length; i++) {
        nota_f  += parseFloat(valores[i]);
        if (nota_f >= 60){
            $('.nota_final').css({
                'color': 'blue', 
                'font-size': '50px'
            });
            $('.nota_final').text(nota_f);
        }else if(nota_f < 60) {
            $('.nota_final').css({
                'color': 'red', 
                'font-size': '50px'
            });
            $('.nota_final').text(nota_f);
        }
    }
    return nota_f;
}


function calculoTotalFaltas(num_faltas) {
    var faltas = 0;
    for(var i = 0; i < num_faltas.length; i++) {
        faltas += parseFloat(num_faltas[i] / 4);
        if (faltas >25){
            $('.num_faltas').css({
                'color': 'red', 
                'font-size': '50px'
            });
            $('.num_faltas').text(faltas);
        }else if(faltas <= 25) {
            $('.num_faltas').css({
                'color': 'blue', 
                'font-size': '50px'
            });
            $('.num_faltas').text(faltas);
        }
    }
    return faltas;
}


function exibeSituacao(nota, faltas) {
    if(nota >= 60 && faltas <= 25) {
        $('.situacao').css({
            'color': 'blue', 
            'font-size': '30px'
        });
        $('.situacao').text('Aprovado');
    }else if(nota >= 60 && faltas > 25) {
        $('.situacao').css({
            'color': 'red', 
            'font-size': '30px'
        });
        $('.situacao').text('Reprovado por faltas');
    }else if(nota < 60 && faltas <= 25) {
        $('.situacao').css({
            'color': 'red', 
            'font-size': '30px'
        });
        $('.situacao').text('Reprovado por Nota');
    }else if(nota < 60 && faltas > 25) {
        $('.situacao').css({
            'color': 'red', 
            'font-size': '30px'
        });
        $('.situacao').text('Reprovado por Nota e Faltas');
    }
}

function validarNotas(valores, minimo, maximo) {
    var valor = 0
    for(var i = 0; i < valores.length; i++) {
        valor = parseFloat(valores[i]);
        if (isNaN(valor) || valor < minimo || valor > maximo){
            alert('Conferir os campos de notas, inserir apenas valores entre 0 e 25.');
            return false;
        }
    }
    return true;
}

function validarFaltas(valores, minimo, maximo) {
    var valor = 0
    for(var i = 0; i < valores.length; i++) {
        valor = parseFloat(valores[i]);
        if (isNaN(valor) || valor < minimo || valor > maximo){
            alert('Conferir os campos de faltas, inserir apenas valores entre 0 e 100.');
            return false;
        }
    }
    return true;
}