let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 5-

let maiorNumero = 0;
for(index = 0; index < numbers.length; index += 1){
    if(maiorNumero < numbers[index]){
        maiorNumero = numbers[index];
    }
    else {
        maiorNumero = maiorNumero;
    }
}

console.log(maiorNumero);