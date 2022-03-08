// 11-

const salarioBruto = Math.floor(Math.random() * 10000) + 1000;
let salarioComInssDescontado = null;
let salarioComIrDescontado = null;
let salarioLiquido = null;

if(salarioBruto > 0 && salarioBruto <= 1556.94){
    let inssAplicado = 0.08;
    salarioComInssDescontado = salarioBruto - (salarioBruto * inssAplicado)
}
else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    let inssAplicado = 0.09;
    salarioComInssDescontado = salarioBruto - (salarioBruto * inssAplicado)
}
else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    let inssAplicado = 0.11;
    salarioComInssDescontado = salarioBruto - (salarioBruto * inssAplicado)
}
else if(salarioBruto > 5189.82){
    let inssAplicado = 570.88;
    salarioComInssDescontado = salarioBruto - inssAplicado;
}
else if(salarioBruto <= 0) {
    console.log("Erro! Valor inválido!")
}
else {
    console.log("Erro! Valor inválido!")
}


if (salarioBruto >= 1){
    console.log(`O valor com INSS descontado é de: ${salarioComInssDescontado}`)
}

if(salarioComInssDescontado <= 1903.98){
    salarioLiquido = salarioComInssDescontado;
}
else if(salarioComInssDescontado > 1903.98 && salarioComInssDescontado <= 2826.65){
    let aliquota = 0.075;
    let parcela = 142.80;
    let irAplicado = (salarioComInssDescontado * aliquota) - parcela;
    salarioComIrDescontado = salarioComInssDescontado - irAplicado;
    salarioLiquido = salarioComIrDescontado;
}
else if(salarioComInssDescontado > 2826.66 && salarioComInssDescontado <= 3751.05){
    let aliquota = 0.15;
    let parcela = 354.80;
    let irAplicado = (salarioComInssDescontado * aliquota) - parcela;
    salarioComIrDescontado = salarioComInssDescontado - irAplicado;
    salarioLiquido = salarioComIrDescontado;
}
else if(salarioComInssDescontado > 3751.06 && salarioComInssDescontado <= 4664.68){
    let aliquota = 0.225;
    let parcela = 636.13;
    let irAplicado = (salarioComInssDescontado * aliquota) - parcela;
    salarioComIrDescontado = salarioComInssDescontado - irAplicado;
    salarioLiquido = salarioComIrDescontado;
}
else if(salarioComInssDescontado > 4664.68){
    let aliquota = 0.275;
    let parcela = 869.36;
    let irAplicado = (salarioComInssDescontado * aliquota) - parcela;
    salarioComIrDescontado = salarioComInssDescontado - irAplicado;
    salarioLiquido = salarioComIrDescontado;
}
else {
    console.log("Erro!")
}

if (salarioBruto >= 1){
    console.log(`O seu salário líquido é de: ${salarioLiquido}`);
}