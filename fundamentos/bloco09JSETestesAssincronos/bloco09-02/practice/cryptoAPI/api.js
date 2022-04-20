const API_URL = "https://api.coincap.io/v2/assets";

const getCoins = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(`Algo deu errado :(\n${error}`)
    }
};

const getCurrency = async () => {
    const baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`;
    const endpoint = `/currencies/usd.min.json`;
    const url = baseUrl.concat(endpoint);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.usd;
    } catch (error) {
        console.log(error.toString());
    }
}

const getFirst10 = async () => {
    const arr = await getCoins();
    const first10 = await arr.filter((coin, index) => index <= 9);
    return first10;
}

const insertCoins = async () => {
    const coins = await getFirst10();
    const currency = await getCurrency();
    const list = document.getElementById('orderedList');
    const insert = await coins.forEach((coin) => {
        const toUsd = coin.priceUsd;
        const toBrl = toUsd * currency.brl;
        const li = document.createElement('li');
        li.innerText = `${coin.name}(${coin.symbol}): Worth aproximately $${Math.floor(toUsd)} wich means aproximately R$${Math.floor(toBrl)}`;
        list.appendChild(li);
    });
}

window.onload = () => insertCoins();