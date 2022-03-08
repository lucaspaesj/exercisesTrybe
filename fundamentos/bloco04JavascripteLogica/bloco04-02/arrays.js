// Conteúdo vídeo - Arrays são listas contendo elementos

let pizzas = ["4 Queijos", "Frango com Catupiry", "Marguerita", "Palmito", "Chocolate"];

pizzas.push("Peito de peru"); // Adicionar um elemento ao final do Array
pizzas.unshift("Gratinada"); // Adiciona um elemento ao final do Array
pizzas.pop(); // Remove o último elemento do Array - Interessante reparar que ele manteve a pizza de chocolate, isto por que antes adicionamos a pizza de peito de peru
pizzas.shift(); // Remove o primeiro elemento do Array - Assim como no exemplo anterior, ele manteve a pizza de 4 Queijos e removeu a pizza Gratinada, pois a adicionamos anteriormente


pizzas.length; // Saber quantos elementos tem o Array

// pizzas.sort(); // Traz em ordem alfabética, ou crescente, caso numeros, os elementos do Array

// console.log(pizzas);

// Estrutura de repetição:

// for (let index = 0; index < pizzas.length; index++) {
//     console.log(pizzas[index]);
// }

// Exercícios:
// 1-

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf("Serviços");
console.log(menuServices);

// 2-

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf("Portfólio");

console.log(indexOfPortfolio);

// 3-

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push("Contato");
console.log(menu3);