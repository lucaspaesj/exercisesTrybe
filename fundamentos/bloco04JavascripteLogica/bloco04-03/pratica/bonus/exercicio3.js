let n = 5;
let str = "";
for (let index = 1; index <= n; index += 1) {
    for (let index2 = 0; index2 < n - index; index2 += 1) {
        str += " ";
    }

    for (let index3 = 0; index3 < index; index3 += 1) {
        str += "*";
    }
    str += "\n";
}
console.log(str);