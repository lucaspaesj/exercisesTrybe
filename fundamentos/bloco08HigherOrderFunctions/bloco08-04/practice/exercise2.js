// Para os exercícios 2, 3 e 4 considere o seguinte array:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

// expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const defineAcc = books.reduce((acc, book, index, array) => (index < array.length - 1) ? acc + `${book.author.name}, ` : acc + `${book.author.name}.`, "");
  return defineAcc;
}

// console.log(reduceNames());

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// expectedResult = 43;

const getAges = (obj) => {
  return obj.map((book) => {
    return book.releaseYear - book.author.birthYear;
  })
}

function averageAge() {
  const sumAges = getAges(books).reduce((acc, num) => {
    return acc + num;
  }, 0);
  return sumAges / getAges(books).length;
}

// console.log(averageAge());

// 4 - Encontre o livro com o maior nome.

// expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// function longestNamedBook() {
//   return books.reduce((biggestBook, currentBook) => {
//     if (currentBook.name.length > biggestBook.name.length) {
//       return currentBook;
//     }
//     return biggestBook;
//   });
// }

// console.log(longestNamedBook());

const getBookName = (obj) => {
  return obj.map((book)=>book.name);
}
const largestBookName = getBookName(books).reduce((acc, num) => (acc.length > num.length) ? acc : num);
const returnLargestBookName = (str) => {
  return books.find((item) => str === item.name);
}
// console.log(returnLargestBookName(largestBookName));

// 5- 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (obj) => {
  return obj.map((name) => {
    const newName = name.replace(/[^Aa]/g, "");
    return newName.length;
  })
}
const containsATotal = (obj) => `A quantidade que a letras "A" e "a" aparecem no array é: ${containsA(obj).reduce((acc, num)=>acc+num, 0)}`;

// console.log(containsATotal(names));

// 6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de grades refere-se ao aluno na posição 0 de students , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const checkGrades = students.reduce((acc, student, index) => {
  acc.push({
    name: student,
    average: grades[index].reduce((acc, grade)=>acc+grade, 0),
  });
  return acc;
}, [])

console.log(checkGrades);