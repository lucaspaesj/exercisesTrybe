// 10-

const custoProduto = 1000;
const impostoSobreOCusto = 0.2;
const valorCustoTotal = (custoProduto * impostoSobreOCusto) + custoProduto;
const valorVenda = 1500;
const lucro = valorVenda - valorCustoTotal;

console.log(`O lucro foi de R$${lucro}`);
