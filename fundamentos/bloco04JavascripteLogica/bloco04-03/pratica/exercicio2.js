let word = 'Hello World!';
let reversedWord = "";

for(i = word.length - 1; i >= 0; i -= 1){
    reversedWord += word[i]
}

console.log(reversedWord);