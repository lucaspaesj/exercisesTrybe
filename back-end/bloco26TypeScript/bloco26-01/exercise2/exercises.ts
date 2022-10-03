export function greeter(name: string):string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function rhombus(highDiagonal: number, lowDiagonal: number): number {
  return highDiagonal * lowDiagonal / 2;
}

export function trapezoid(highBase: number, lowBase: number, height: number): number {
  return (highBase + lowBase) * height / 2;
}

export function circle(radius: number): number {
  return radius ** 2 * 3.14;
}

export enum Days {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

export enum Rainbow {
  red = 1,
  orange,
  yellow,
  green,
  blue,
  indigo,
  violet,
}
