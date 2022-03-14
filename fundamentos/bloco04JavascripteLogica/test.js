function hydrate(str) {
    let result = (str.match(/\d+/g) || []).map(n => parseInt(n));
    return console.log(result);
}

hydrate("123Lucas");