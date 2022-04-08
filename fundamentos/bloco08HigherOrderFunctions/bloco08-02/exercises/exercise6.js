// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
const orderPeople = (arr, ordem) => {
    if(ordem === "crescente"){
        return arr.sort((a, b) => a.age - b.age);
    }
    return arr.sort((a, b) => b.age - a.age);
}
orderPeople(people, "crescente");
// orderPeople(people, "decrescente");

console.log(people);