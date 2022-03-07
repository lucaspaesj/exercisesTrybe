// Conteúdo vídeo:

let movie = "Avengers"; // string literal - sequência de caracteres
let score = 10; // number literal - valor inteiro ou quebrados 10.49, etc
let isValid = true; // boolean
let name; // undefined - ainda não foi definido o valor
let color = null; // null

// tipagem do js é dinâmica - ou seja, o js identifica mesmo se não for explicitado o tipo de variável

// operações aritméticas - +; -; *; /; **

let salary = 3500;
// console.log(salary + salary);
// console.log(salary - salary);
// console.log(salary * salary);
// console.log(salary / salary);
// console.log(3 ** 3);

// incrementar ++; decrementar --

// salary++;

// console.log(salary);

// salary--;

// console.log(salary);

// Exercício:

/*
Agora é a hora da mão na massa no código! No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .
*/

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof(patientId), typeof(isEnrolled), typeof(patientInfo), typeof(patientEmail));

/* 
1- Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
2- Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
3- Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
*/

const base = 5;
let height = 8;

const area = base * height;
console.log(area);

const perimeter = base + height;
console.log(perimeter);