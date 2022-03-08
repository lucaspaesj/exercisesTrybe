// Conteúdo vídeo - Arrays são listas contendo elementos

let pizzas = ["4 Queijos", "Frango com Catupiry", "Marguerita", "Palmito", "Chocolate"];

pizzas.push("Peito de peru"); // Adicionar um elemento ao final do Array
pizzas.unshift("Gratinada"); // Adiciona um elemento ao final do Array

pizzas.length; // Saber quantos elementos tem o Array

// pizzas.sort(); // Traz em ordem alfabética, ou crescente, caso numeros, os elementos do Array

// console.log(pizzas);

// Estrutura de repetição:

for (let index = 0; index < pizzas.length; index++) {
    console.log(pizzas[index]);
}