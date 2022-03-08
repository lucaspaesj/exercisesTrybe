let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 2-
// Utilizei esta referência para o código: https://stackoverflow.com/questions/62467400/simple-array-sum-using-javascript-single-integer
let sum = 0;
for(index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
console.log(sum);