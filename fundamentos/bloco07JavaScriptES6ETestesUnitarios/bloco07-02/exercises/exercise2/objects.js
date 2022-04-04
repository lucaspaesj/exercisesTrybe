const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

// Imagine um cenário em que você precisa completar as informações do cliente adicionando uma nova propriedade para armazenar seu sobrenome. Uma das formas já vistas até então é reescrever o objeto, dessa vez já com a nova propriedade lastName .

customer.lastName = "Faria";

console.log(customer);

// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const newPerson = (object ,keyName, value) => {
    object[keyName] = value;
    return object;
}

const person1 = {}

console.log(newPerson(person1, "name", "Lucas"));

newPerson(person1, "age", "22");

console.log(person1);