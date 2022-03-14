// O document representa uma instância no DOM que armazena as tags HTML

// A função "getElementById" busca o elemento contido no HTML com aquele ID fornecido como parâmetro


//Propriedades:
// Já o .innerHTML busca o puro texto contido dentro da tag solicitada, inclusive tags contidas dentro daquela tag
// Se só busco o texto, existe outra propriedade que filtra e retorna apenas o texto: .innerText
// .style busca o estilo(CSS) aplicado dentro daquela tag

console.log(document.getElementById("teste"));

// Alterando o conteúdo do HTML pelo JS:

document.getElementById("teste").innerText = "Aprendizados da aula de hoje";

