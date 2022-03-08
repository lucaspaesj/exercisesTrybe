//7-

let porcentagemNota = 101;
let conceito = null;

if(porcentagemNota >= 90 && porcentagemNota <= 100){
    conceito = "A";
    console.log(`Seu conceito é: ${conceito}`);
}
else if(porcentagemNota >= 80 && porcentagemNota < 90){
    conceito = "B";
    console.log(`Seu conceito é: ${conceito}`);
}
else if(porcentagemNota >= 70 && porcentagemNota < 80){
    conceito = "C";
    console.log(`Seu conceito é: ${conceito}`);
}
else if(porcentagemNota >= 60 && porcentagemNota < 70){
    conceito = "D";
    console.log(`Seu conceito é: ${conceito}`);
}
else if(porcentagemNota >= 50 && porcentagemNota < 60){
    conceito = "E";
    console.log(`Seu conceito é: ${conceito}`);
}
else if(porcentagemNota < 50){
    conceito = "F";
    console.log(`Seu conceito é: ${conceito}`);
}
else if(porcentagemNota < 0 || porcentagemNota > 100){
    console.log("Erro! Nota inválida!")
}
else {
    console.log("Erro! Nota inválida!")
}