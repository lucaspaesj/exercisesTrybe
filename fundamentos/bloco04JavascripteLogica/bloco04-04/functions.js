// Conteúdo vídeo

let statusCarro = "desligado";
let aceleracao = 0
let rotacaoDoVolante = 0;

function ligarDesligar() {
    if (statusCarro === "desligado") {
        statusCarro = "ligado";
    }
    else {
        statusCarro = "desligado";
    }
    return statusCarro;
}

function acelerar(incremento) {
    aceleracao += incremento;
    return `Acelerando a ${aceleracao} m/s²`;
}

function desacelerar(decremento) {
    aceleracao -= decremento;
    return `Desacelerando para ${aceleracao} m/s²`;
}

function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + "º";
}

console.log(ligarDesligar());
console.log(acelerar(20));
console.log(desacelerar(5));
console.log(girarVolante(-45));
console.log(girarVolante(45));
console.log(desacelerar(15));
console.log(ligarDesligar());

// Exemplo 1:
// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
    console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// Exemplo 2(Sem parâmetros):
function bomDia() {
    return 'Bom dia!';
}

console.log(bomDia()); // Bom dia!

// Exemplo 3(Sem parâmetros):
let status = 'deslogado';

function logarDeslogar() {
    if (status === 'deslogado') {
        status = 'logado';
    } else {
        status = 'deslogado';
    }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado

// Exemplo 4(Com parâmetros):
// Com função
function soma(a, b) {
    return a + b;
}

console.log(soma(5, 2)); // 7

// Exemplo 5(Com parâmetros):
function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
        return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
        return segundoNum + ' é maior que ' + primeiroNum;
    } else {
        return 'Os números são iguais';
    }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais