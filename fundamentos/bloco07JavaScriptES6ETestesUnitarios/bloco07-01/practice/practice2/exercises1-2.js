// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// const factorial = num => {
//     let total = num;
//     for(let i = num - 1; i > 0; i -= 1){
//         total *= i;
//     }
//     return total;
// }

// console.log(factorial(5));

const factorial = num => (num === 1 || num === 0) ? 1 : num * factorial(num - 1);

console.log(factorial(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggestWordInPhrase = str => {
    const arr = str.split(" ");
    let biggestWord = ""
    for(let i = 0; i < arr.length; i += 1){
        (arr[i].length > biggestWord.length) ? biggestWord = arr[i] : biggestWord = biggestWord;
    }
    return biggestWord;
}

console.log(biggestWordInPhrase("Antônio foi no banheiro e não sabemos o que aconteceu"));