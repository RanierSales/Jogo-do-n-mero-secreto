let numeroMáximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function mudarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirTextoInicial() {
    mudarTextoNaTela('h1','Jogo da adivinhação');
    mudarTextoNaTela('p',`Escolha um número entre 1 e ${numeroMáximo}`);
}

exibirTextoInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
    let escritaTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}`;

    if (chute == numeroSecreto) {
        mudarTextoNaTela('h1', 'Acertou!');
        mudarTextoNaTela('p', escritaTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            mudarTextoNaTela('p', 'O numero é menor!');
        }
        else {
            mudarTextoNaTela('p', 'O numero é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() *numeroMáximo +1);
        return numeroSorteado;
}
 
