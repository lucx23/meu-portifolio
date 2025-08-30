var nome = document.getElementById("nome");
var botao = document.getElementById("botao");
var bemvindo = document.getElementById("bemvindo");

botao.addEventListener("click", function() {
    const nomeUser = nome.value.trim();
    botao.textContent = "Carregando...";
    setTimeout(function() {
        if (nomeUser) {
             bemvindo.textContent = "Bem-vindo(a), " + nomeUser + "! Espero que você goste do meu portfólio!";
             bemvindo.classList.remove("animar");
             void bemvindo.offsetWidth;
             bemvindo.classList.add("animar");
             botao.textContent = "Enviado";
             botao.style.boxShadow = "none"
             botao.disabled = true;
             botao.style.opacity = 0.6;

             botao.addEventListener("mouseenter", function() {
                 botao.style.cursor = "not-allowed";
                 botao.style.transform = "scale(1)";
             });
        } else {
            bemvindo.textContent = "Por favor, insira seu nome.";
            botao.textContent = "Enviar";
        }

    },1000);


});