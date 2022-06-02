const generateRandomNumber = () => Math.floor(Math.random() * 101);

const allCaps = (str) => str.toUpperCase();

const firtLetter = (str) => str[0];

const concatWords = (str, str2) => `${str}${str2}`;

function fetchDog() {
    return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
        response
            .json()
            .then(json =>
                response.ok ? Promise.resolve(json) : Promise.reject(json)
            )
    );
}

module.exports = { generateRandomNumber, allCaps, firtLetter, concatWords, fetchDog };
