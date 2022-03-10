// Conteúdo video:
// Pedidos de pizza
let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaCatupiry: true
};

// for(let key in pizzas){
//     console.log(pizzas[key]);
// }

let pizzasDoces = ["Chocolate", "Banana", "Morango"];

// for(let key in pizzasDoces){
//     console.log(key, pizzasDoces[key]);
// }

// Exemplo 1:
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
    console.log(cars[index]);
}

// Exemplo 2:
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

for (let index in car) {
    console.log(index, car[index]);
}

// Exemplo 3:
// for/in - Percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades.
let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
    console.log(position);
};
//resultado: 0, 1, 2;

// for/of - Percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in.
for (let value of food) {
    console.log(value);
};
//resultado: hamburguer, bife, acarajé;