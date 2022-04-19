const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;

// Neste primeiro trecho de código temos duas declarações de variáveis. A primeira delas, despesas , é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, renda , representa o quanto esta pessoa recebeu neste mesmo mês.
// Nosso próximo passo será implementar uma função que trate estas informações para que tenhamos como resultado um balanço de entradas e saídas do mês.

const somaDespesas = (despesas) => {
  const despesasTotais = despesas.map((item) => Object.values(item));
  return despesasTotais.reduce((acc, value) => acc += value[0], 0);
}

// console.log(somaDespesas());

const despesaMensal = (renda, despesas, callback) => {
  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;
  return `Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `
};

console.log(despesaMensal(renda, despesas, somaDespesas));