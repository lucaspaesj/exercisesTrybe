// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome(word) {
    let splittedWord = word.split("");
    let arrReverse = splittedWord.reverse();
    let joinArray = arrReverse.join("");
    if (joinArray === word) {
        return true;
    }
    return false;
}

console.log(isPalindrome("arara"));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function returnBiggestIndexOfValue(arr) {
    let max = arr[0];
    let maxIndex = 0;
    for (let value in arr) {
        if (isNaN(arr[value])) {
        }
        else {
            if (arr[value] > max) {
                max = arr[value];
                maxIndex = value;
            }
        }
    }
    return maxIndex;
}

console.log(returnBiggestIndexOfValue([2, 4, 6, 8, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function returnSmallestIndexOfValue(arr) {
    let min = arr[0];
    let minIndex = 0;
    for (let value in arr) {
        if (isNaN(arr[value])) {
        }
        else {
            if (arr[value] < min) {
                min = arr[value];
                minIndex = value;
            }
        }
    }
    return minIndex;
}

console.log(returnSmallestIndexOfValue([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestName(arr) {
    let biggestName = arr[0];
    for (let key in arr) {
        if (typeof arr[key] == "string") {
            if (arr[key].length > biggestName.length) {
                biggestName = arr[key];
            }
        }
    }
    return biggestName;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function getNumberThatAppearsTheMost(arr) {
    let appearence = 1;
    let largestAppearence = 0;
    let number = 0;
    for (let index = 0; index < arr.length; index += 1) {
        for (let index2 = 0; index2 < arr.length; index2 += 1) {
            if (arr[index] === arr[index2]) {
                largestAppearence += 1;
            }
            if (appearence < largestAppearence) {
                appearence = largestAppearence;
                number = arr[index];
            }
        }
        largestAppearence = 0;
    }
    return number;
}

console.log(getNumberThatAppearsTheMost([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumEveryNumberBefore(num){
    let totalSum = 0;
    if(num <= 0){
    }
    else{
        for(let index = num; index >= 1; index -= 1){
            totalSum += index;
        }
    }
    return totalSum;
}

console.log(sumEveryNumberBefore(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function checkEndWord(word, ending){
    let isEqual = false;
    let contador = 0;
    for(let index = word.length - 1; index >= 0; index -= 1){
        for(let index2 = ending.length - 1 - contador; index2 >= 0; index2 -= 1){
            if(ending[index2] === word[index]){
                isEqual = true;
                contador += 1;
                index2 = 0;
            }
            else{
                isEqual = false;
                index2 = 0;
            }
        }
    }
    return isEqual;
}

console.log(checkEndWord("Trybeee", "beee"));

