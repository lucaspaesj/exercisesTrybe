const readline = require('readline-sync');

const weight = readline.questionInt('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

const calc = (w, h) => w / (h * 2);

const IMC = calc(weight, height);

switch (true) {
  case (IMC < 18.5):
    console.log(`Seu IMC é de: ${IMC} e você está abaixo do peso (magreza)`);
    break;
  case (IMC >= 18.5 && IMC <= 24.9):
    console.log(`Seu IMC é de: ${IMC} e você está com peso normal`);
    break;
  case (IMC >= 25 && IMC <= 29.9):
    console.log(`Seu IMC é de: ${IMC} e você está acima do peso`);
    break;
  default:
    console.log('Sei lá');
    break;
}

console.log(IMC >= 18.5 && IMC <= 24.9);

module.exports = calc;
