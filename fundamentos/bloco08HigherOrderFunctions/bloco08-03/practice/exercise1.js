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

// - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

//Referência da RegExp: https://stackoverflow.com/questions/13725739/replace-all-occurrences-in-a-string-with-javascript
const bookScript = books.map((book) => `${book.name.toUpperCase().replace(/ /g, "_")} - ${book.genre.toUpperCase().replace(/ /g, "_")} - ${book.author.name.toUpperCase().replace(/ /g, "_")}`);

// console.log(bookScript);

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort

const nameAndAge = books.map((book)=> ({ age: book.releaseYear - book.author.birthYear, author: book.author.name })).sort((a, b) => a.age - b.age);

// console.log(nameAndAge);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter ;

const sciFiFantasyBooks = books.filter((book)=>book.genre === "Ficção Científica" || book.genre === "Fantasia");

// console.log(sciFiFantasyBooks);

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const oldestBooks = books.filter((book)=>book.releaseYear < 1962).sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldestBooks);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const orderedNames = books.filter((book) => book.genre === "Ficção Científica" || book.genre === "Fantasia").map((book)=>book.author.name).sort();

// console.log(orderedNames);

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const orderedBooks = books.filter((book)=>book.releaseYear < 1962).map((book)=>book.name);

// console.log(orderedBooks);

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

// Referência da RegExp: https://www.geeksforgeeks.org/javascript-regexp-s-metacharacter/#:~:text=The%20RegExp%20%5Cs%20Metacharacter%20in,t%5Cn%5Cr%5D.&text=Example%201%3A%20This%20example%20replaces%20the%20white%20spaces%20with%20dash.
// https://stackoverflow.com/questions/54643684/regex-to-match-the-string-which-contains-dot
const findBook = books.find((book)=>book.author.name.match(/[a-zA-Z][.]\s[a-zA-Z][.]\s[a-zA-Z][.]/));
console.log(findBook);