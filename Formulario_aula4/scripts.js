const form = document.getElementById('form');
const user = document.getElementById('username');
const email = document.getElementById('email');
const userName = document.getElementById("name");
const masc = document.getElementById("masculino");
const radios = document.getElementById("radios");
const button = document.getElementsByName("sexo");
const estados = document.getElementById("estados");
const est = document.getElementsByName("estado");
const posses = document.getElementById("posses");
const bens = document.getElementsByName("bens");
const hobby = document.getElementById("hobby");
const idade = document.getElementById("idade");
const btn = document.querySelector("#msg");
const msg = document.querySelector("#mensagem");


form.addEventListener("submit", function(event) {
    event.preventDefault(); //para evitar que a página recarregue quando clicar no botão de enviar 
    verificaForm();
});



function verificaForm() {
    var erros = 0 ;
    //nome
    if(user.value === "") {
        user.classList.add("erro");
        erros ++;
    } else {
        user.classList.remove("erro")
    }

    //email
    if(email.value === "") {
        email.classList.add("erro");
        erros ++;
    } else {
        email.classList.remove("erro")
    }

    //sexo
    
    for(var i = 0; i < button.length; i++){
        var checado = false;
        if(button[i].checked) {
            checado = true;
            break;
        }
    }
    if(!checado) {
       radios.classList.add("erro");
       erros ++;
    }else {
       radios.classList.remove("erro");
    }

    //estado civil 

    for(var i = 0; i < est.length; i++){
        var checado = false;
        if(est[i].checked) {
            checado = true;
            break;
        }
    }
    if(!checado) {
       estados.classList.add("erro");
       erros ++;
    }else {
       estados.classList.remove("erro");
    }

    //bens

    for(var i = 0; i < bens.length; i++){
        var checado = false;
        if(bens[i].checked) {
            checado = true;
            break;
        }
    }
    if(!checado) {
       posses.classList.add("erro");
       erros ++;
    }else {
       posses.classList.remove("erro");
    }

    //hobby

    if(hobby.value === "") {
        hobby.classList.add("erro");
        erros ++;
    } else {
        hobby.classList.remove("erro");
    }

    //faixa etaria

    if(idade.value === "") {
        idade.classList.add("erro");
        erros ++;
    } else {
        idade.classList.remove("erro");
    }



    // alerta de erro
    if (erros > 0) {
        alert("Por favor, preencha todos os campos obrigatórios em vermelho antes de enviar o formulário.")
    }else{
        erros = 0;

        //mensagem de envio
        // btn.addEventListener("click", function(event) {
        //     event.preventDefault();
        //     msg.textContent = "Dados enviados com sucesso!";
        //     msg.style.fontSize = "15px";
        //     msg.style.textAlign = "center";
        //     msg.style.fontFamily = 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        // });
    }
}




// checar email
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}




// nome do usuario na tela
window.onload = function() {
    var nome = prompt("Insira o seu nome:");
    if (nome != null) {
        userName.innerHTML = "Olá, " + nome + "!";
    }else{
        userName.innerHTML = "Olá, Visitante!";
    }
}

// limpar formulario

function limpaForm() {
    form.reset();
}

