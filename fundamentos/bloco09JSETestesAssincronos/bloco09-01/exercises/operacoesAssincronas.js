// Até então, você tem programado de uma forma basicamente similar à seguinte:
// 1 - Execute o passo A ;
// 2 - Execute o passo B ;
// 3 - Execute o passo C .
// E você, naturalmente, espera que o passo A seja executado antes do B , e que o B seja executado antes do C .
// Entretanto, você consegue ir além no JavaScript . 🚀
// Suponha que você tenha uma operação A que gaste muito tempo, e que você tenha uma operação B em sequência que independe totalmente de A . B ter que esperar por A é um problema, haja vista que B não depende de forma alguma de A . Como você faz para contornar esse problema?
// Resposta: assincronicidade
// Com assincronicidade, a operação A começa a executar e, logo em seguida, B também, sem ter que esperar A terminar.
// Essa forma de trabalho é natural, e você faz isso o tempo todo sem perceber! Um exemplo clássico: são 20h de uma segunda-feira, você está em casa com fome e decide pedir uma pizza. 🍕 Você fica esperando, sem fazer nada, enquanto a pizza não chega? Você pode fazer o que quiser nesse meio tempo, como escutar música ou ver vídeos no YouTube , por exemplo. E assim que a pizza chegar, você dedica seu tempo para poder jantar.
// Nesse exemplo da pizza, o ato de pedir a pizza corresponde a uma operação assíncrona, e os atos de escutar música e ver vídeos no YouTube são exemplos de operações que independem de pedir a pizza.
// Além disso, você também vai aprender como reaproveitar códigos no Jest. Lembre-se que repetir código é ruim, pois você pode se enganar ao tentar replicar exatamente o mesmo código, além de escrever mais do que precisa. Pensando neste problema, no conteúdo de hoje, você vai aprender algumas formas de configurar e escrever testes, evitando repetições e gerando um código mais limpo.


setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

//Agora, vamos ver um pouco da prática realizando este exercício de fixação. Copie o código para ser executado na sua máquina:

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]

// Por que o primeiro código retorna o array [1, 2, 3] enquanto o segundo retorna o array [2, 3] ? Isso ocorre por causa da função setTimeout . Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1) . Como o console.log é uma função síncrona, ele é executado antes do setTimeout terminar.
// Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);