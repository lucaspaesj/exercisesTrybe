type Callback<T> = (item: T, index?: number, array?: T[]) => boolean;

function myFilter<T>(array: T[], callback: Callback<T>): T[] {
  const newArr: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
  return item !== "a"
}));