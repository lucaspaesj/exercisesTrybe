// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObj = {
    method: 'GET',
    headers: { Accept: 'application/json ' },
  };

  try {
    const response = await fetch(API_URL, myObj);
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.log(`Algo deu errado :(\n${error}`)
  }
};

const insertJoke = async () => {
  const joke = await fetchJoke();
  const element = document.getElementById('jokeContainer');
  element.innerText = `${joke}`;
}

window.onload = () => insertJoke();