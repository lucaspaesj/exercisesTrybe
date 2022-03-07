// Conteúdos do vídeo:
// variáveis let - podemos reatribuir valores
let age = 20;

age = 21;

let fullName = "Hulk";

// variáveis const - não podemos reatribuir valores
const ageTwo = 20;

// ageTwo = 40;

// console.log(age);

// console.log(fullName);

// console.log(ageTwo);

// Exercícios:
/*
1- Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina). OK
2- Crie uma constante chamada birthCity e atribua a ela a sua cidade natal. OK
3- Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu. OK 
4- Utilize o console.log() para imprimir as constantes e variáveis que você criou. OK
5- Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece! OK
6- Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔 OK
 */

const myName = "Lucas Paes Januzi";

const birthCity = "Belo Horizonte";

let birthYear = 1999;

console.log(myName, birthCity, birthYear);

birthYear = 2000;

console.log(birthYear);

// Aqui, a variável é constante, ou seja, não pode ser reatribuído o seu valor
// birthCity = "São Paulo";
// console.log(birthCity);