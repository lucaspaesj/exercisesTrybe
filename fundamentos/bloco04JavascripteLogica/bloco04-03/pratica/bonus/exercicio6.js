let number = 34;
let contador = 0;
if (number === 1) {
    console.log("O número 1 não é considerado primo nem composto");
}
else if (number < 1) {
    console.log("Erro! O número deve ser positivo")
}
else {
    for (let index = 2; index < number; index += 1) {
        if (number % index === 0) {
            contador += 1;
        }
    }
    if(contador === 0){
        console.log("O número inserido é primo!")
    }
    else{
        console.log("O número inserido não é primo")
        contador = 0;
    }
}