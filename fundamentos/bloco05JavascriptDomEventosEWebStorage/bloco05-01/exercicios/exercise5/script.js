// document.querySelector - Retorna o primeiro elemento que for encontrado a partir da chamada dessa função
// Trabalha com seletores CSS
// Mais flexível que os getElementBy...

console.log(document.getElementById("Dona")); // Mais específico para ID;

console.log(document.querySelector("#Dona")); // Mais geral, encontra o primeiro elemento;

console.log(document.querySelector("p")); // Retornou o primeiro elemento que encontrou - Airton Senna;

console.log(document.querySelector(".pilotos-sem-titulo p")); // Semelhante aos seletores CSS;

console.log(document.querySelector(".pilotos-sem-titulo .piloto-f1-atual")); // Vai de encontro aos conceitos de seletores do CSS

// QuerySelector só retorna a primeira ocorrência que ele encontrar