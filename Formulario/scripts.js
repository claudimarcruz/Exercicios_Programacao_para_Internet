const btn = document.querySelector("#visibilidade");
const msg = document.querySelector("#mensagem");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    msg.textContent = "Dados enviados com sucesso!";
    msg.style.fontSize = "50px";
    msg.style.textAlign = "center";
    msg.style.fontFamily = 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
});