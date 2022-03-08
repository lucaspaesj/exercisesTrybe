// O for/of nos permite criar loops em objetos iteráveis como strings, arrays, entre outros.
// Nós declaramos uma variável e logo chamamos o "of", estabelecendo dentro do bloco de código que ele chame aquela variável que havíamos declarado anteriormente.

// Exercício

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let name of names){
    console.log(name);
}