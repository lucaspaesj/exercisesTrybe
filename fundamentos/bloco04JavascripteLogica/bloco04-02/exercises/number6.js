let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 6-

let oddValues = 0;
for(index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        oddValues += 1;
    }
}

if(oddValues >= 1){
    console.log(`Existem ${oddValues} números ímpares no Array!`);
}
else {
    console.log("Nenhum valor ímpar encontrado!");
}