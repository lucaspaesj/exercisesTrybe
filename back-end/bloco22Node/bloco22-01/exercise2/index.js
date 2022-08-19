const operations = require('./operacoes');
const readline = require('readline-sync');

console.log('Calculadora Simples');
const num1 = readline.questionInt('Digite o primeiro número: ');
const operation = readline.question('Digite a operação: (+, -, *, /)');
const num2 = readline.questionInt('Digite o segundo número: ');

switch (operation) {
  case '+':
    operations.sum(num1, num2);
    break;
  case '-':
    operations.sub(num1, num2);
    break;
  case '*':
    operations.mul(num1, num2);
    break;
  case '/':
    operations.div(num1, num2);
    break;
  default:
    console.log('Operador inválido');
    break;
}
