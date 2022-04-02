// function testingScope(escopo) {
//     if (escopo === true) {
//         var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//         console.log(ifScope);
//     } else {
//         var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// - Modifique a estrutura da função para que ela seja uma arrow function .
// - Modifique as concatenações para template literals.
const testingScope = escopo => {
  if(escopo === true){
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    return console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora do meu escopo (else)"
    return console.log(elseScope);
  }
}
testingScope(true);

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 11, 7, 2];

// Seu código aqui.
const ascendingOrder = oddsAndEvens.sort((a, b) => a - b);

console.log(ascendingOrder);

// será necessário alterar essa linha 😉