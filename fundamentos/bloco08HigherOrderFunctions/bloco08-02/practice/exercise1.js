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
// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find .


const getPersonsBook = (callback) => `A primeira pessoa autora nascida no ano de 1947 é: ${callback().author.name} e seu livro é: ${callback().name}`;
const firstAuthorBorn = () => books.find((person) => person.author.birthYear === 1947);

// console.log(getPersonsBook(firstAuthorBorn));

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

const countLengthBookName = (arr) => {
    const newArr = [];
    arr.forEach((value) => {
        newArr.push(value.name);
    })
    return newArr;
}

const getSmallerBookName = (callback ,arr) => {
    let smallerBook = arr[0].name;
    callback(arr).forEach((value) => {
        if(value.length < smallerBook.length){
            smallerBook = value;
        }
        smallerBook = smallerBook;
    })
    return smallerBook;
}

// console.log(getSmallerBookName(countLengthBookName, books));

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const getFirst26ChBook = () => {
    return books.find((value) => {
        return value.name.length === 26;
    });
}

// console.log(getFirst26ChBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

// Referência do código abaixo: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const booksOrderedByReleaseYearDesc = () => {
    return books.sort((a, b) => {
        if(b.releaseYear > a.releaseYear){
            return 1;
        } else if (b.releaseYear < a.releaseYear){
            return -1;
        }
        return 0;
    });
}

// console.log(booksOrderedByReleaseYearDesc());

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const someAuthorWereBornPostXXCentury = books.some((value) => value.author.birthYear >= 2000);
const allAuthorsWereBornPreXXCentury = (callback) => {
    if(callback){
        return `${false}, Not all authors were born pre XX century`;
    }
    return `${true}, All authors were born pre XX century`;
}

console.log(allAuthorsWereBornPreXXCentury(someAuthorWereBornPostXXCentury));

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const someBookWasReleasedInEigthies = books.some((value) => value.releaseYear >= 1980 && value.releaseYear <= 1989);
console.log(someBookWasReleasedInEigthies);

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());