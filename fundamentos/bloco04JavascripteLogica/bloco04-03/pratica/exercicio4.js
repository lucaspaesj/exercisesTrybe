// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let number = 0;
let contador = 0;
for(let index = 3; index < 50; index += 1){
    for(let indexPrimo = 2; indexPrimo < index; indexPrimo += 1){
        if(index % indexPrimo === 0){
            contador += 1;
        }
    }
    if(contador === 0){
        number = index;
    }
    else{
        contador = 0;
    }
}
console.log(number);