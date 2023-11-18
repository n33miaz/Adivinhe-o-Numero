const limite = 1000;
let numSecreto;
let chute = 0;
let tentativas = 1;

// função para reiniciar o jogo gerando um novo número secreto
function reiniciarJogo() {
  numSecreto = Math.floor(Math.random() * limite) + 1;
}

// função para exibir o jogo, ocultando a mensagem de boas-vindas e mostrando o contêiner do jogo
function exibirJogo() {
  reiniciarJogo();
  document.getElementById("boas-vindas").style.display = "none";
  document.getElementById("jogo").style.display = "block";
}

// função para exibir mensagens em elementos HTML específicos
function exibirMensagem(elementId, mensagem) {
  document.getElementById(elementId).innerText = mensagem;
}

// função para verificar o chute do usuário e fornecer feedback
function verificarChute() {
  let userInput = document.getElementById("usuario-input");
  let input = userInput.value;
  chute = parseInt(input);

  // verifica se o chute é válido
  if (isNaN(chute) || chute < 1 || chute > limite) {
    exibirMensagem("prompt", `Erro, digite um número entre 1 e ${limite}`);
    return;
  }

  // loop para fornecer feedback sobre o chute até que o usuário acerte
  do {
    if (chute != numSecreto) {
      // feedback sobre o chute incorreto
      exibirMensagem(
        "prompt",
        `O número é ${chute < numSecreto ? "maior" : "menor"} que ${chute}`
      );
      alert("Sinto muito, você errou!");
      userInput.value = "";
      tentativas++;
      return;
    } else {
      // feedback sobre o chute correto e opção para jogar novamente
      exibirMensagem(
        "prompt",
        `Parabéns, você acertou!
                Tentativas falhas: ${tentativas}`
      );
      userInput.value = "";
      jogarNovamente();
    }
  } while (chute != numSecreto);
}

// função para exibir a mensagem de boas-vindas e ocultar o contêiner do jogo
function boasVindas() {
  document.getElementById("boas-vindas").style.display = "block";
  document.getElementById("jogo").style.display = "none";
}

// função para permitir que o usuário jogue novamente
function jogarNovamente() {
  // oculta o botão de chute e o input do usuário
  document.getElementById("btnChute").style.display = "none";
  document.getElementById("usuario-input").style.display = "none";

  // cria um botão para jogar novamente
  const container = document.getElementById("container");
  const jogarDenovo = document.createElement("button");
  jogarDenovo.classList.add("btnJogarNovamente");
  jogarDenovo.textContent = "Jogar Novamente";
  container.appendChild(jogarDenovo);

  // adiciona um ouvinte de evento ao botão de jogar novamente
  jogarDenovo.addEventListener("click", function () {
    // remove o botão de jogar novamente e exibe a mensagem de boas-vindas
    container.removeChild(jogarDenovo);
    location.reload();
  });
}

// mensagem inicial para o usuário sobre o jogo
alert(`Tente adivinhar o número entre 1 e ${limite}`);