// 1 - Crie uma classe Car cujo objeto representará um carro.

class Car {
  brand: string;
  color: string;
  doors: number;
  isOn: boolean = false;
  speed: number = 0;
  direction: string = 'forward';
  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  honk() {
    console.log(`honk honk`);
  }
  turnOn() {
    this.isOn = true;
    console.log('The car is on');
  }
  turnOff() {
    this.isOn = false;
    console.log('The car is off')
  }
  speedUp() {
    this.speed = this.speed + 20;
    console.log(`The car speed up: ${this.speed}km/h`);
  }
  speedDown() {
    this.speed = this.speed - 20;
    console.log(`The car speed down: ${this.speed}km/h`);
  }
  stop() {
    this.speed = 0;
    console.log(`The car stopped: ${this.speed}km/h`);
  }
  turn(direction?: string) {
    if (direction) {
      this.direction = direction;
    }
    console.log(`The car is moving ${this.direction}`);
  }
}

// 2 - Vamos agora utilizar a classe Car que criamos no exercício anterior.

const car1 = new Car('volkswagen', 'prata', 4);

car1.turn();
car1.speedUp();
car1.speedUp();
car1.speedDown();
car1.turn('left');
car1.turn('forward');
car1.turn('right');
car1.turn('forward');
car1.speedUp();
car1.speedUp();
car1.speedDown();
car1.speedDown();
car1.turn('right');
car1.turn('forward');
car1.speedUp();
car1.speedDown();
car1.stop();