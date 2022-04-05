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

module.exports = { sum, myRemove, myFizzBuzz, encode, decode };