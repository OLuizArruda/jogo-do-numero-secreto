let numeroSecreto = geraNumeroSecreto();
let tentativas = 1;
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibeTextoNaTela('h1', 'Acertou!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibeTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto){
        exibeTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibeTextoNaTela('p','O número secreto é maior');
    }
    tentativas++;
    limpaCampo();

    }

function mensagemInicial(){
    exibeTextoNaTela('h1','Jogo do número secreto');
    exibeTextoNaTela('p','Escolha um número de 1 a 10');
}


function exibeTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function geraNumeroSecreto(){
    return parseInt(Math.random() * 10 + 1);
} 

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroSecreto();
    limpaCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}