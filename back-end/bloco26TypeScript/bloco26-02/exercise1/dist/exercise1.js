"use strict";
// Type Unions
function imprimirCPF(cpf) {
    console.log("Seu CPF é: " + cpf);
}
imprimirCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111
imprimirCPF('111.111.111-11');
// Clases
// usamos a palavra reservada class para definir uma classe
class Person {
    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name, birthDate, age) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);
console.log(person1);
person1.speak();
// 1 - Crie uma classe cujo objeto represente um Cachorro.
class Dog {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
    jump(why) {
        console.log(`${this.name} is jumping ${why || ''}`);
    }
}
const dog1 = new Dog('Rufus', 'Lhasa Apso');
console.log(dog1.bark());
console.log(dog1.jump('Because he is happy'));
