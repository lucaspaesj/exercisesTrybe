// document.querySelectorAll -
// Retorna uma lista de elementos: retorna todos os elementos
// Trabalha com seletores CSS
// Mais flexível que os getElementBy...

console.log(document.querySelector("div"));

console.log(document.querySelectorAll("div"));

console.log(document.querySelectorAll("p"));

document.querySelectorAll("p")[0].innerText = "Lenda";

console.log(document.querySelectorAll(".piloto-f1-atual"));

console.log(document.querySelectorAll(".piloto-f1-atual").length); // 6

console.log(document.querySelectorAll(".pilotos-sem-titulo .piloto-f1-atual"));

// Tanto o querySelector quanto o querySelectorAll acessam CSS Selectors de todos os tipos. Ou seja, eles podem acessar muito além de valores de ids e classes. 