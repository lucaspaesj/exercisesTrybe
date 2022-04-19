// Lembre-se: quando definimos uma função, o parâmetro pode ter qualquer nome, porém, ao fazer a execução/chamada dessa função, o parâmetro deve ser um valor definido. No nosso caso, vamos utilizar uma função como parâmetro ( callback ).
// Vamos ver um exemplo de como esse processo acontece:

// // Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// // Definição da função getUser
// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return param(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// getUser(userFullName);

//Vamos ao passo a passo:
// Definimos a função userFullName ;
// Definimos a função getUser
// Definimos que o parâmetro que a nossa getUser vai receber se chama "param".
// Ao executar a função getUser , passamos a função userFullName como parâmetro.
// Ou seja, o parâmetro "param" de dentro da nossa getUser é igual à função userFullName . Isso significa que, ao definirmos nossa função, o parâmetro é dinâmico, ele vai assumir o valor que passarmos no momento em que executarmos a nossa função.
// Tenha tranquilidade e lembre-se sempre: Nada melhor do que a prática. E falando nisso... vamos praticar? ;)
// Agora, faça estes exercícios de fixação:

// 1 - Adicione uma callback como parâmetro da funcão getUser .
// No código abaixo você tem a função getUser , que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
// Insira o retorno da função getUser ;
// Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
// Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Insira o retorno da função `getUser`
//   return callback(userToReturn)
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// 2 - Passe, como parâmetro e como retorno, uma callback para a função getUser .
// No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:
// Insira uma callback como parâmetro da função getUser ;
// Retorne a callback passada como parâmetro na função getUser ;

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(user);
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

