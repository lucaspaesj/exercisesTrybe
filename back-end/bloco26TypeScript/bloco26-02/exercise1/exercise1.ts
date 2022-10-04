// Type Aliases
// 1 - Crie um type para um objeto que represente um pássaro.
type Bird = {
  color: string,
  specie: string,
};
// 2 - Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Sum = (n1: number, n2: number) => number;
// 3 - Crie um type para um objeto que represente um endereço.
// type Address = {
//   publicPlace: string;
//   number: number;
//   district: string;
//   city: string;
//   state: string;
// };

// Type Unions

function imprimirCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

imprimirCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111
imprimirCPF('111.111.111-11');

// 1 - Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type Matter = 'líquido' | 'sólido' | 'gasoso';

// 2 - Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type Cpf = number | string;

// 3 - Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type Os = 'linux' | 'mac' | 'windows';

// 4 - Crie um type union que represente as vogais do alfabeto.
type Vogals = 'a' | 'e' | 'i' | 'o' | 'u';

// Clases
// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  age?: number; // Podemos usar o caractere ? para marcar uma propriedade como opcional, o que faz com seu tipo seja um union type entre o tipo original e undefined.
  // aprenderemos mais sobre o construtor na próxima seção
  // considere-o como uma função utilizada para construir um objeto a partir da classe,
  // nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, age?: number) {
      // usamos o this para acessar as propriedades da instância da classe,
      // ele representa a própria instância que estamos criando
      // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
      this.name  = name;
      this.birthDate  = birthDate;
      this.age  = age;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
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
  name: string;
  specie: string;
  constructor(name: string, specie: string) {
    this.name = name;
    this.specie = specie;
  }
  bark(): void {
    console.log(`${this.name} is barking`);
  }
  jump(why?: string): void {
    console.log(`${this.name} is jumping ${why || ''}`);
  }
}

const dog1 = new Dog('Rufus', 'Lhasa Apso');

console.log(dog1.bark());
console.log(dog1.jump('because he is happy'));

// 2 - Crie uma classe cujo objeto represente uma Casa.
class House {
  owner: string;
  address: string;
  color: string;
  area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this.owner = owner;
    this.address = address;
    this.color = color;
    this.area = area;
  }
}

// 3 - Crie uma classe cujo objeto represente um Voo.

class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;


  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  }
}

// Interfaces
// 1 - Crie uma interface cujo objeto represente um Automóvel.
interface Automobile {
  name: string;
  brand: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
};
// 2 - Crie uma interface cujo objeto represente um Felino.
interface Feline {
  name: string;
  subfamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
};
// 3 - Crie uma interface cujo objeto represente uma Aeronave.
interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
};

// Type assertion (as Type):
type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

// função que converte de string para json
// function stringToJson(str: string): unknown {
//   const result = JSON.parse(str);
//   return result;
// }

// // utilizando o "as" para converter de unknown para User
// const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// // Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
// const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

// user.name;
// address.street;

// Generics:
function stringToJson<T>(str: string): T {
  const result = JSON.parse(str);
  return result;
}

const user = stringToJson<User>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');

const address = stringToJson<Address>('{"street":"Rua Tamarindo","number":1}')

user.name;
address.street;