// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObj = {
      method: 'GET',
      headers: { Accept: 'application/json '},
  };

  fetch(API_URL, myObj)
    .then((response) => response.json())
    .then((data) => data.joke);
};

window.onload = () => fetchJoke();