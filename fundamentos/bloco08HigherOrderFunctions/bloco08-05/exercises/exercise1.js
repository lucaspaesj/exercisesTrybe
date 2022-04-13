// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'uva', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'chocolate', 'pêra'];

const fruitSalad = (fruit, additional) => {
  const mix = [...fruit, ...additional];
  return mix;
};

console.log(fruitSalad(specialFruit, additionalItens));