// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

const substituteX = (str, substitute) => {
    const newArr = str.split(" ");
    for(let i = 0; i < newArr.length; i += 1){
        newArr[i] === "x" ? newArr[i] = substitute : newArr[i] = newArr[i];
    }
    return newArr.join(" ");
}

console.log(substituteX("Tryber x aqui!", "Lucas"));
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".
const arr = ["Html", "Css", "DOM", "JS", "Bootstrap"];

const concatStrArr = (str) => `${str} Minhas cinco principais habilidades são: ${arr.join(", ")}`;

console.log(concatStrArr(substituteX("Tryber x aqui!", "Lucas")));