let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = null;
let menorPalavra = array[0];
let numeradorMaior = 0;
let numeradorMenor = array[0].length;

for(let index = 0; index < array.length; index += 1){
    if(array[index].length > numeradorMaior){
        numeradorMaior = array[index].length;
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);

for(let index = 0; index < array.length; index += 1){
    if(array[index].length < numeradorMenor){
        numeradorMenor = array[index].length;
        menorPalavra = array[index];
    }
}
console.log(menorPalavra);