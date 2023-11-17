const limite = 1000;

function reiniciarJogo() {
    return Math.floor(Math.random() * limite) + 1;
}

let numSecreto = reiniciarJogo(); // geração de um número aleatório entre 0 e 1000
let chute = 0;
let input = 0;
let jogarNovamente = "n";
let tentativas = 1;

alert('Jogo da Adivinhação');
alert(`O jogo começou! Foi gerado um número aleatório entre 1 e ${limite}, e você deve adivinhá-lo.`);

do { // laço de repetição

    // para ver o número secreto use "alert(numSecreto);"

    if (input === 0) { // para mostrar a tentativa anterior da segunda tentativa em diante
        input = prompt('Digite seu chute:');
    }
    else {
        input = prompt(`Digite seu chute: (tentativa anterior: ${chute})`);
    }
    chute = parseInt(input); // validando a entrada do usuário

    if (isNaN(chute) || chute < 1 || chute > limite) { // validação do número digitado
        alert(`O número digitado é invalido, digite um entre 1 e ${limite}`);
        continue;
    }

    if (chute != numSecreto) { // comparação do chute com o número aleatório
        alert(`Sinto muito, você errou! (Dica: o número é ${chute < numSecreto ? 'maior' : 'menor'})`);
    }
    else {
        alert(`Parabéns, você acertou! O número secreto é ${chute}, tentativas falhas: ${tentativas}.`);
        jogarNovamente = prompt('Deseja jogar novamente? (s ou n)');

        if (jogarNovamente.toLowerCase() === "s") {
            numSecreto = reiniciarJogo(); // troca do valor do número secreto
        }
        else if (jogarNovamente.toLowerCase() === "n") {
            alert('Muito obrigado por jogar!');
        }
    }

    tentativas = tentativas + 1;
} while (chute !== numSecreto || jogarNovamente.toLowerCase() === "s");