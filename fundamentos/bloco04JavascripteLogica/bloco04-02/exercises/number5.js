let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 4-

let maiorNumero = 0;
let contador = 1;
for(index = 0; index < numbers.length; index += 1){
    if(maiorNumero > numbers[index]){
        maiorNumero = maiorNumero;
    }
    else if(maiorNumero < numbers[index]){
        maiorNumero = numbers[index];
    }
    else if(maiorNumero === numbers[index]){
        maiorNumero = maiorNumero;
    }
}

console.log(maiorNumero);