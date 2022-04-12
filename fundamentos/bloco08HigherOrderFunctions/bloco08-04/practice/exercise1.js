// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(arr) {
    const reducedArr = arr.reduce((acc, obj)=>{
        obj.map((item)=>acc.push(item));
        return acc;
    }, [])
    return reducedArr;
}

console.log(flatten(arrays));