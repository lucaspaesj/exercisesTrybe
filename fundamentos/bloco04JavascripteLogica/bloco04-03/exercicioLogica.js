let fruits = [3, 4, 10, 1, 12];

let valorTotal = 0;
for(let index = 0; index < fruits.length; index += 1){
    valorTotal += fruits[index]
}

if(valorTotal > 15){
    console.log(valorTotal);
}
else {
    console.log("Valor menor que 16");
}