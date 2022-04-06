const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }
  return a + b;
};

const myRemove = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const myFizzBuzz = num => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const encode = str => {
  const arr = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === "a") {
      arr.push(1);
    }
    else if (str[index] === "e") {
      arr.push(2);
    }
    else if (str[index] === "i") {
      arr.push(3);
    }
    else if (str[index] === "o") {
      arr.push(4);
    }
    else if (str[index] === "u") {
      arr.push(5)
    }
    else {
      arr.push(str[index]);
    }
  }
  const newStr = arr.join("")
  return newStr;
}

const decode = str => {
  const arr = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === "1") {
      arr.push("a");
    }
    else if (str[index] === "2") {
      arr.push("e");
    }
    else if (str[index] === "3") {
      arr.push("i");
    }
    else if (str[index] === "4") {
      arr.push("o");
    }
    else if (str[index] === "5") {
      arr.push("u");
    }
    else {
      arr.push(str[index]);
    }
  }
  const newStr = arr.join("");
  return newStr;
}

const techList = (arr, str) => {
  if (arr[0] === undefined) {
    return "Vazio!";
  }
  const newArrAlphabetic = arr.sort();
  const newArr = [];
  for (let item in newArrAlphabetic) {
    newArr.push({
      tech: arr[item],
      name: str
    })
  }
  return newArr;
}

function hydrate(str) {
  const result = str.match(/\d+/g).map(n => parseInt(n));
  let sum = 0;
  let newStr = "";
  console.log(result);
  for (let item of result) {
    sum += item;
  }
  sum === 1 ? newStr = `${sum} copo de água` : newStr = `${sum} copos de água`;
  return newStr;
}

const searchEmployee = (id, detail) => {
  const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];
  let detailResult;
  for(let professional of professionalBoard){
    if(professional[detail] === undefined){
      throw new Error("Informação indisponível");
    }
    if(id === professional['id']){
      detailResult = professional[detail];
    }
  };
  if(detailResult === undefined){
    throw new Error("ID não identificada");
  }
  return detailResult;
};

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee };