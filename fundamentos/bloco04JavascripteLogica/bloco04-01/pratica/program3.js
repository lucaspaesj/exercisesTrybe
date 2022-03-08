// 3-

const a = 10;
const b = 10;
const c = 5;

if (a > b && a > c) {
    console.log("O maior número é " + a)
}
else if (b > a && b > c) {
    console.log("O maior número é " + b)
}
else if (c > a && c > b){
    console.log("O maior número é " + c)
}
else if(a === c) {
    console.log("O maior número é " + a)
}
else if(a === b) {
    console.log("O maior número é " + a)
}
else if(b === c) {
    console.log("O maior número é " + b)
}
else {
    console.log("Os valores são iguais")
}