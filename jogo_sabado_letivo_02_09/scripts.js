function insereOpcao(opcao) {
    //var ganhador = document.getElementById("venceJogo");
    var escolha = document.getElementById("escolha");
    //ganhador.innerHTML = " ";
    escolha.innerText = opcao;
}


function escolhaPc() {
    var alternativas = ['Pedra', 'Papel', 'Tesoura'];
    var escolhido = Math.floor(Math.random() * alternativas.length);
    var campoPc = document.getElementById("escolhaComp");
    campoPc.innerHTML = alternativas[escolhido];
}

function ganhadorJogo() {
    var ganhador = document.getElementById("venceJogo");
    var escolha = document.getElementById("escolha").innerText;
    var campoPc = document.getElementById("escolhaComp").innerText;
    if (escolha === campoPc) {
        ganhador.innerHTML = "Empate"
    }else if (
        (escolha === "Pedra" && campoPc === "Tesoura") ||
        (escolha === "Papel" && campoPc === "Pedra") ||
        (escolha === "Tesoura" && campoPc === "Papel")
    ) {
        ganhador.innerHTML = "Parabéns, você ganhou!!!"
    } else {
        ganhador.innerHTML = "O computador ganhou."
    }
}

