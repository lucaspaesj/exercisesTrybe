// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
    const number = numbers.find((item) => item % 3 === 0 && item % 5 === 0);
    return number;
};

console.log(findDivisibleBy3And5())