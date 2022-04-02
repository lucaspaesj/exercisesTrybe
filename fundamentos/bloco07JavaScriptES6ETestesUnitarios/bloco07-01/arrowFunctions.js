// Sem arrow function
// const sum = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(1, 2));

// Com arrow function
// const sum = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(sum(1,2));

// const sum = (num1, num2) => num1 + num2;

// console.log(sum(1,2));

// Sem arrow function
// function wordCounter(phrase) {
//     return phrase.split(" ").length;
// }

// console.log(wordCounter("Fala tribo, belez?"))

// Com arrow function
// const wordCounter = phrase => phrase.split(" ").length;

// console.log(wordCounter("Fala tribo, belez?"));

// Sem arrow function 

// function objectPerson (nome, idade) {
//     return {
//         nome: nome,
//         idade: idade
//     }
// }

// console.log(objectPerson("joaquim", 25));

// Com arrow function

// const objectPerson = (nome, idade) => ({ nome: nome, idade: idade });

// console.log(objectPerson("joaquim", 25));

//arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function :

// const printName = () => {
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:

const printName = () => 'Lucas';
console.log(printName());

// Mas lembre-se que podemos omitir os parênteses apenas em um cenário: 
// Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));