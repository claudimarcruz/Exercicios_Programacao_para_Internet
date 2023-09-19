$(document).ready(function() {
    $('#botao_exibir').click(function() {
        //matematica_____________________________
        var nota_mat_1 = $('#nota_mat_1').val();
        var falta_mat_1 = $('#falta_mat_1').val();

        var nota_mat_2 = $('#nota_mat_2').val();
        var falta_mat_2 = $('#falta_mat_2').val();

        var nota_mat_3 = $('#nota_mat_3').val();
        var falta_mat_3 = $('#falta_mat_3').val();

        var nota_mat_4 = $('#nota_mat_4').val();
        var falta_mat_4 = $('#falta_mat_4').val();

        var notas_mat = [nota_mat_1, nota_mat_2, nota_mat_3, nota_mat_4];
        var faltas_mat = [falta_mat_1, falta_mat_2, falta_mat_3, falta_mat_4];

        //validar campos
        //mat 
        if(validarNotas(notas_mat, 0, 25, 'Matemática') && validarFaltas(faltas_mat, 0, 100, 'Matemática')) {
            //calculo das notas
            calculoTotalNota(notas_mat, '.nota_final_mat');
        
            //calculo das faltas
            calculoTotalFaltas(faltas_mat, '.num_faltas_mat');

            // mostrar situação
            exibeSituacao(calculoTotalNota(notas_mat),calculoTotalFaltas(faltas_mat), '.situacao_mat');
        }


        //portugues_____________________________
        var nota_port_1 = $('#nota_port_1').val();
        var falta_port_1 = $('#falta_port_1').val();

        var nota_port_2 = $('#nota_port_2').val();
        var falta_port_2 = $('#falta_port_2').val();

        var nota_port_3 = $('#nota_port_3').val();
        var falta_port_3 = $('#falta_port_3').val();

        var nota_port_4 = $('#nota_port_4').val();
        var falta_port_4 = $('#falta_port_4').val();

        var notas_port = [nota_port_1, nota_port_2, nota_port_3, nota_port_4];
        var faltas_port = [falta_port_1, falta_port_2, falta_port_3, falta_port_4];

        //validar campos
        //port 
        if(validarNotas(notas_port, 0, 25, 'Português') && validarFaltas(faltas_port, 0, 100, 'Português')) {
            //calculo das notas
            calculoTotalNota(notas_port, '.nota_final_port');
        
            //calculo das faltas
            calculoTotalFaltas(faltas_port, '.num_faltas_port');

            // mostrar situação
            exibeSituacao(calculoTotalNota(notas_port),calculoTotalFaltas(faltas_port), '.situacao_port');
        }



        //geografia_____________________________
        var nota_geo_1 = $('#nota_geo_1').val();
        var falta_geo_1 = $('#falta_geo_1').val();

        var nota_geo_2 = $('#nota_geo_2').val();
        var falta_geo_2 = $('#falta_geo_2').val();

        var nota_geo_3 = $('#nota_geo_3').val();
        var falta_geo_3 = $('#falta_geo_3').val();

        var nota_geo_4 = $('#nota_geo_4').val();
        var falta_geo_4 = $('#falta_geo_4').val();

        var notas_geo = [nota_geo_1, nota_geo_2, nota_geo_3, nota_geo_4];
        var faltas_geo = [falta_geo_1, falta_geo_2, falta_geo_3, falta_geo_4];

        //validar campos
        //geo 
        if(validarNotas(notas_geo, 0, 25, 'Geografia') && validarFaltas(faltas_geo, 0, 100, 'Geografia')) {
            //calculo das notas
            calculoTotalNota(notas_geo, '.nota_final_geo');
        
            //calculo das faltas
            calculoTotalFaltas(faltas_geo, '.num_faltas_geo');

            // mostrar situação
            exibeSituacao(calculoTotalNota(notas_geo),calculoTotalFaltas(faltas_geo), '.situacao_geo');
        }



        //biologia_____________________________
        var nota_bio_1 = $('#nota_bio_1').val();
        var falta_bio_1 = $('#falta_bio_1').val();

        var nota_bio_2 = $('#nota_bio_2').val();
        var falta_bio_2 = $('#falta_bio_2').val();

        var nota_bio_3 = $('#nota_bio_3').val();
        var falta_bio_3 = $('#falta_bio_3').val();

        var nota_bio_4 = $('#nota_bio_4').val();
        var falta_bio_4 = $('#falta_bio_4').val();

        var notas_bio = [nota_bio_1, nota_bio_2, nota_bio_3, nota_bio_4];
        var faltas_bio = [falta_bio_1, falta_bio_2, falta_bio_3, falta_bio_4];

        //validar campos
        //bio 
        if(validarNotas(notas_bio, 0, 25, 'Biologia') && validarFaltas(faltas_bio, 0, 100, 'Biologia')) {
            //calculo das notas
            calculoTotalNota(notas_bio, '.nota_final_bio');
            console.log(calculoTotalNota(notas_bio));
        
            //calculo das faltas
            calculoTotalFaltas(faltas_bio, '.num_faltas_bio');

            // mostrar situação
            exibeSituacao(calculoTotalNota(notas_bio),calculoTotalFaltas(faltas_bio), '.situacao_bio');
        }

        //historia_____________________________
        var nota_hist_1 = $('#nota_hist_1').val();
        var falta_hist_1 = $('#falta_hist_1').val();

        var nota_hist_2 = $('#nota_hist_2').val();
        var falta_hist_2 = $('#falta_hist_2').val();

        var nota_hist_3 = $('#nota_hist_3').val();
        var falta_hist_3 = $('#falta_hist_3').val();

        var nota_hist_4 = $('#nota_hist_4').val();
        var falta_hist_4 = $('#falta_hist_4').val();

        var notas_hist = [nota_hist_1, nota_hist_2, nota_hist_3, nota_hist_4];
        var faltas_hist = [falta_hist_1, falta_hist_2, falta_hist_3, falta_hist_4];

        //validar campos
        //hist 
        if(validarNotas(notas_hist, 0, 25, 'História') && validarFaltas(faltas_hist, 0, 100, 'História')) {
            //calculo das notas
            calculoTotalNota(notas_hist, '.nota_final_hist');
        
            //calculo das faltas
            calculoTotalFaltas(faltas_hist, '.num_faltas_hist');

            // mostrar situação
            exibeSituacao(calculoTotalNota(notas_hist),calculoTotalFaltas(faltas_hist), '.situacao_hist');
        }


        //função resultado final
        var notas = [calculoTotalNota(notas_mat), calculoTotalNota(notas_port),calculoTotalNota(notas_geo), calculoTotalNota(notas_bio), calculoTotalNota(notas_hist)];
        var faltas = [calculoTotalFaltas(faltas_mat), calculoTotalFaltas(faltas_port), calculoTotalFaltas(faltas_geo), calculoTotalFaltas(faltas_bio), calculoTotalFaltas(faltas_hist)];
         
        checarAprovação(notas, faltas);
    
    });  
});


//calcular a nota
function calculoTotalNota(valores, classeNotas) {
    var nota_f = 0;
    for(var i = 0; i < valores.length; i++) {
        nota_f  += parseFloat(valores[i]);
        if (nota_f >= 60){
            $(classeNotas).css({
                'color': 'blue', 
                'font-size': '18px'
            });
            $(classeNotas).text(nota_f);
        }else if(nota_f < 60) {
            $(classeNotas).css({
                'color': 'red', 
                'font-size': '18px'
            });
            $(classeNotas).text(nota_f);
        }
    }
    return nota_f;
}



//calcular as fotos
function calculoTotalFaltas(num_faltas, classeFaltas) {
    var faltas = 0;
    for(var i = 0; i < num_faltas.length; i++) {
        faltas += parseFloat(num_faltas[i] / 4);
        if (faltas >25){
            $(classeFaltas).css({
                'color': 'red', 
                'font-size': '18px'
            });
            $(classeFaltas).text(faltas);
        }else if(faltas <= 25) {
            $(classeFaltas).css({
                'color': 'blue', 
                'font-size': '18px'
            });
            $(classeFaltas).text(faltas);
        }
    }
    return faltas;
}




//exibir a aprovação individual das materias
function exibeSituacao(nota, faltas, classeSituacao) {
    if(nota >= 60 && faltas <= 25) {
        $(classeSituacao).css({
            'color': 'blue', 
            'font-size': '18px'
        });
        $(classeSituacao).text('Aprovado');
    }else if(nota >= 60 && faltas > 25) {
        $(classeSituacao).css({
            'color': 'red', 
            'font-size': '18px'
        });
        $(classeSituacao).text('Reprovado por faltas');
    }else if(nota < 60 && faltas <= 25) {
        $(classeSituacao).css({
            'color': 'red', 
            'font-size': '18px'
        });
        $(classeSituacao).text('Reprovado por Nota');
    }else if(nota < 60 && faltas > 25) {
        $(classeSituacao).css({
            'color': 'red', 
            'font-size': '18px'
        });
        $(classeSituacao).text('Reprovado por Nota e Fatas');
    }
}



//validar entrada das notas
function validarNotas(valores, minimo, maximo, texto) {
    var valor = 0
    for(var i = 0; i < valores.length; i++) {
        valor = parseFloat(valores[i]);
        if (isNaN(valor) || valor < minimo || valor > maximo){
            alert('Conferir os campos de notas da disciplina de ' +texto + ', inserir apenas valores entre 0 e 25.');
            return false;
        }
    }
    return true;
}



//validar entrada das notas
function validarFaltas(valores, minimo, maximo, texto) {
    var valor = 0;
    for(var i = 0; i < valores.length; i++) {
        valor = parseFloat(valores[i]);
        if (isNaN(valor) || valor < minimo || valor > maximo){
            alert('Conferir os campos de faltas da disciplina de ' +texto + ', inserir apenas valores entre 0 e 100.');
            return false;
        }
    }
    return true;
}


//exibir a aprovação final
function checarAprovação(notas, faltas) {
    var materias = [ 'Matemática', 'Português', 'Geografia', 'Biologia', 'História'];
    var aprovado = [];
    //var naoAprovado = [];
    var reprovado = [];
    var recuperacao = [];
    for(var i = 0; i < materias.length; i++) {
        aprovado.push(materias[i]);
        if(notas[i] >= 60 && faltas[i] <=25) {
            if(aprovado.length == 5) {
                console.log('aprovado ' + aprovado.length);
                $('.situacao_final').css( {
                    'color': 'blue', 
                    'font-size': '30px'
                });
                $('.situacao_final').text('Aprovado!');
            }
            
        }else if(notas[i] < 60 || faltas[i] > 25) {
            reprovado.push(materias[i]);
            recuperacao.push(materias[i]);
            console.log('reprovado ' + reprovado.length);
            console.log('recuperacao ' + recuperacao.length);
            if(reprovado.length > 3) {
                $('.situacao_final').css( {
                    'color': 'red', 
                    'font-size': '30px'
                });
                $('.situacao_final').text('Reprovado em: ' + reprovado);
            }
            
            if( recuperacao.length >=1 &&  recuperacao.length <= 3) {
                $('.situacao_final').css( {
                    'color': 'red', 
                    'font-size': '30px'
                });
                $('.situacao_final').text('Recuperação em: ' + recuperacao);
            }
            
        }
    }
}


//secretaria

var form_aluno = document.getElementById('form_aluno');   
var nome_aluno = document.getElementById('nome_aluno');  
var lista_alunos = document.getElementById('lista_alunos');
var botao_aluno = document.getElementById('botao_aluno'); 
var exibir_aluno = document.getElementById('exibir_aluno');
var listagem_a = document.getElementById('lista_a');

/* var form_aluno = $('#form_aluno').val();
var botao_aluno = $('#botao_aluno');
var nome_aluno = $('#nome_aluno').val();
var lista_alunos = $('#lista_alunos'); */

var nomes_alunos = [];

function atualizarLista () {
    //lista_alunos.innerHTML = '';
    nomes_alunos.forEach((nome) => {
    var li = document.createElement('li');
    li.innerHTML = `${nome}`;
    //lista_alunos.appendChild(li);
    })   
}


form_aluno.addEventListener('submit', (event) => {
    nomes_alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    event.preventDefault();
    var nome = nome_aluno.value;

    if(vericaRepetido(nome)) {
        alert('Nome do aluno já existente!')
        return;
    }

    if(nome) {
        nomes_alunos.push(nome);
        localStorage.setItem('alunos', JSON.stringify(nomes_alunos));
        atualizarLista();
        nome_aluno.value = '';
        alert('Aluno salvo!');
    }
});


botao_aluno.addEventListener('click', () => {
    form_aluno.dispatchEvent(new Event('submit'));
});

//verifica nomes repetidos
function vericaRepetido(nome) {
    for(var i = 0; i < nomes_alunos.length; i++) {
        if(nomes_alunos[i] === nome) {
            return true;
        }
    }
    return false;
}

//exibir alunos

exibir_aluno.addEventListener('click', () => {
    var lista = [];
    listagem_a.innerHTML = '';
    lista = JSON.parse(localStorage.getItem('alunos')) || [];

    lista.forEach(function(nome, index) {
        var div = document.createElement('div');
        div.classList.add('grid-item');
        div.innerHTML = `${nome} `;

        var button = document.createElement('button');
        button.textContent = 'Excluir';
        button.addEventListener('click', function () {
            lista.splice(index, 1);

        localStorage.setItem('alunos', JSON.stringify(lista));

        listagem_a.removeChild(div);
    });
     
    div.appendChild(button);
    listagem_a.appendChild(div);
    });
});


function excluirAluno(index) {
    nomes_alunos.splice(index, 1);
    atualizarLista();
}
