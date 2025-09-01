var nome = document.getElementById("nome"); //Pegando o valor do input
var botao = document.getElementById("botao"); //Pegando o botão
var bemvindo = document.getElementById("bemvindo"); //Pegando a mensagem de boas-vindas

botao.addEventListener("click", function() { //Função para lidar com o clique do botão
    const nomeUser = nome.value.trim(); //Pegando o valor do input e removendo espaços em branco desnecessários
    botao.textContent = "Carregando..."; //Mudando o conteúdo do texto do botão
    setTimeout(function() { //Simulando um carregamento
        if (nomeUser) { //Se o usuário tiver inserido um nome
            bemvindo.textContent = "Bem-vindo(a), " + nomeUser + "! Espero que você goste do meu portfólio!"; //Atualizando a mensagem de boas-vindas
            bemvindo.classList.remove("animar"); //Removendo a animação atual
            void bemvindo.offsetWidth; //Forçando a reflow
            bemvindo.classList.add("animar"); //Adicionando a animação
            botao.textContent = "Enviado"; //Mudando o texto do botão para "Enviado"
            botao.style.boxShadow = "none"; //Removendo a sombra do botão
            botao.disabled = true; //Desabilitando o botão
            botao.style.opacity = 0.6; //Mudando a opacidade do botão

            botao.addEventListener("mouseenter", function() { //Quando o mouse entra no botão
                botao.style.cursor = "not-allowed"; //Mudando o cursor para "não permitido"
                botao.style.transform = "scale(1)"; //Mantendo o tamanho do botão
            });
        } else {
            bemvindo.textContent = "Por favor, insira seu nome.";
            botao.textContent = "Enviar";
        }

    },1000);


});


const icones = document.querySelectorAll("#tecnologias ul li i"); //Pegando todos os ícones das tecnologias
let index = 0; //Definindo o índice inicial

function brilhoSequencial() { //Função para aplicar o brilho sequencialmente
    icones.forEach(icone => icone.classList.remove("glow")); //Inicialmente removo a classe glow para evitar repetições

    icones[index].classList.add("glow"); //Adiciono a classe glow ao ícone atual

    // Variável para controlar a direção do brilho
    if (typeof brilhoSequencial.direcao === "undefined") {
        brilhoSequencial.direcao = 1; // 1 para frente, -1 para trás
    }

    // Atualiza o índice conforme a direção
    index += brilhoSequencial.direcao;

    // Inverte a direção ao chegar no início ou fim
    if (index >= icones.length) {
        index = icones.length - 2;
        brilhoSequencial.direcao = -1;
    } else if (index < 0) {
        index = 1;
        brilhoSequencial.direcao = 1;
    }
}

setInterval(brilhoSequencial, 1000); //Chama a função a cada 1 segundo