// A função abaixo é bastante simples: recebe dois parâmetros e retorna a soma entre eles. Copie o código e chame a função com dois parâmetros numéricos (por exemplo, 2 e 3). Não esqueça do console.log para que seja possível ver o retorno.

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, 3)); // Resultado: 5

// Tudo funciona perfeitamente quando você tem o controle do código, certo? Mas digamos que você está desenvolvendo uma aplicação onde uma pessoa irá fornecer os valores. Sabemos que pessoas cometem erros e podem, por exemplo, tentar somar o número 2 com a string '3'. O que aconteceria nesse caso?

// console.log(sum(2, "3")); // Resultado: 23

// Esse comportamento ocorre porque considera-se o JavaScript como uma linguagem dinâmica . Ou seja, quando se declara uma variável, não é necessário atrelar ela a nenhum tipo, o que permite inclusive que ela mude de tipo ao longo da execução do código.
// Vamos adicionar uma condicional que impede a pessoa usuária de quebrar a sua calculadora.

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//         return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
// };

// console.log(sum("2", 3)); // "Os valores devem ser numéricos"
// console.log(sum(2, 3)); // 5

// Pronto, agora o seu código avisa para a pessoa usuária que a função sum só aceita números. Aparentemente está tudo funcionando como deveria, mas essa ainda não é a melhor forma de se tratar um erro em JavaScript . Na prática, a função sum está retornando uma string, e essa não é o objetivo de uma função que soma dois números, certo? Você precisa indicar de alguma forma que ocorreu um erro.
// Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw :

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//         throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
// };

// console.log(sum(2, "3"));

// Percebeu a diferença? Agora a execução da função sum foi interrompida e temos uma mensagem de erro no console, bem como uma indicação da linha onde esse erro ocorre.

// Você programou o código para lançar uma exceção caso aconteceça um erro, mas o fluxo do código ainda pode ser melhorado. Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch . Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.
// Aproveitando a ocasião, seria uma ótima ideia refatorar a função sum para que ela não tenha funcionalidades demais.

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Os valores devem ser numéricos');
    }
};

const sum = (value1, value2) => {
    try {
        verifyIsNumber(value1, value2);
        return value1 + value2;
    } catch (error) {
        throw error.message;
    }
};

console.log(sum("2", 3));