let n = 5;
let str = "";
for (let index = 1; index <= n; index += 1) {
    for (let index2 = 0; index2 < n - index; index2 += 1) {
        str += " ";
    }
    for (let index3 = 0; index3 < 2 * index - 1; index3 += 1) {
        if(index === 1 || index === n){
            str += "*";
        }
        else{
            if(index3 === 0 || index3 === 2 * index - 2){
                str += "*";
            }
            else{
                str += " ";
            }
        }
    }
    str += "\n";
}
console.log(str);