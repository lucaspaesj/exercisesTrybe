// Formas de, a partir de um elemento, navegar para outros.
/*
parentNode : retorna o nó pai.
parentElement : retorna o elemento pai.
childNodes : retorna um NodeList com todos os nós filhos.
children : retorna um HTMLCollection com todos os elementos filhos.
firstChild : retorna o primeiro nó filho.
firstElementChild : retorna o primeiro elemento filho.
lastChild : retorna o último nó filho.
lastElementChild : retorna o último elemento filho.
nextSibling : retorna o próximo nó.
nextElementSibling : retorna o próximo elemento.
previousSibling : retorna o nó anterior.
previousElementSibling : retorna o elemento anterior.
*/

console.log(document.getElementById("start").nextSibling);
console.log(document.getElementById("start").nextElementSibling);