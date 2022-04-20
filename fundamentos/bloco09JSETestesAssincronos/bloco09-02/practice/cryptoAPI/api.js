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

const getFirst10 = async () => {
    const arr = await getCoins();
    const first10 = await arr.filter((coin, index) => index <= 9);
    return first10;
}

const insertCoins = async () => {
    const coins = await getFirst10();
    const list = document.getElementById('orderedList');
    const insert = await coins.forEach((coin) => {
        const li = document.createElement('li');
        li.innerText = `${coin.name}(${coin.symbol}): $${coin.priceUsd}`;
        list.appendChild(li);
    })
}

window.onload = () => insertCoins();