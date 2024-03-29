import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango com diagonal maior 32cm e diagonal menor 18cm: ${Exercise.rhombus(32, 18)}cm²`);
console.log(`Losango com diagonal maior 200cm e diagonal menor 50cm: ${Exercise.rhombus(200, 50)}cm²`);
console.log(`Losango com diagonal maior 75cm e diagonal menor 25cm: ${Exercise.rhombus(75, 25)}cm²`);

console.log(`Trapézio com base maior 100cm, base menor 70cm e altura 50cm: ${Exercise.trapezoid(100, 70, 50)}cm²`);

console.log(`Circulo de raio 25cm: ${Exercise.circle(25)}`);

const monday = Exercise.Days[1];

console.log(monday);

const someColor = Exercise.Rainbow[4];

console.log(someColor);