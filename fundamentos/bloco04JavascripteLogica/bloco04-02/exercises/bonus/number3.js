let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 3-

let multipliedNumbers = [];

for(let index = 0; index < numbers.length; index += 1){
    if(typeof numbers[index + 1] == "number"){
        multipliedNumbers.push(numbers[index] * numbers[index + 1]);
    }
    else {
        multipliedNumbers.push(numbers[index] * 2);
    }
}

console.log(multipliedNumbers);