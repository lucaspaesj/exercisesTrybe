function calcDiv (n1, n2) {
  if (n2 === 0) throw new Error('Não da pra dividir por 0!');

  const resultado = n1 / n2;

  return resultado;
}

// calcDiv(2, 0);

try {
  const result = calcDiv(2, 0);
  console.log(result);
} catch (error) {
  console.log(error);
}