//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.

// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.
let sum = 0;
for(let index = 0; index <= 50; index += 1){
    sum += index;
}
console.log(`A soma de 1 a 50 é: ${sum}`);

//2- Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let contador = 0;
for(let index = 2; index <= 150; index += 1){
    if(index % 3 === 0){
        console.log("Adiciona mais um");
        contador += 1;
        console.log(index);
    }
}

if(contador === 50){
    console.log("Isso é muito secreto pra você!")
    console.log(`A quantidade de números é ${contador}`);
}
else {
    console.log(`A quantidade de números é ${contador}`);
}

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Tie" ou "Player 2 won". 

let jogadaPlayerOne = "pedra"
let jogadaPlayerTwo =  "pedra"

if(jogadaPlayerOne === "pedra" && jogadaPlayerTwo === "tesoura" || jogadaPlayerOne === "papel" && jogadaPlayerTwo === "pedra" || jogadaPlayerOne === "tesoura" && jogadaPlayerTwo === "papel"){
    console.log("Player 1 won!")
}
else if(jogadaPlayerTwo === "pedra" && jogadaPlayerOne === "tesoura" || jogadaPlayerTwo === "papel" && jogadaPlayerOne === "pedra" || jogadaPlayerTwo === "tesoura" && jogadaPlayerOne === "papel"){
    console.log("Player 2 won!")
}
else {
    console.log("A tie")
}