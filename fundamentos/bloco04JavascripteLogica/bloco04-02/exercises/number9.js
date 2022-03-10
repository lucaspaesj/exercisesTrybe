let ar = [];
let contador = 0;

for(index = 0; index < 25; index += 1){
    contador += 1;
    ar.push(contador);
}

// 9-

let arrayDivisoes = [];
for(index = 0; index < ar.length; index += 1){
    let valorDividido = ar[index] / 2;
    arrayDivisoes.push(valorDividido);
}

console.log(arrayDivisoes);