// Atribuído valores advindos do HTML
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

// Criando a função que appenda a frase na lista
function insertPhraseInDOM() {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    const phraseText = phrasesList[listLength];
    const phrase = document.createElement('li');
    phrase.innerText = phraseText;
    list.appendChild(phrase);
}

// Criando a função que insere a frase no localStorage
function addPhraseToLocalStorage() {
    const oldList = JSON.parse(localStorage.getItem('phrases'));
    const phraseText = input.value;
    oldList.push(phraseText);
    localStorage.setItem('phrases', JSON.stringify(oldList));
    insertPhraseInDOM();
}

// Criando a função que inicia a página já criando uma chave valor pro localStorage se não houver
// Se houver ele já reconhece as informações e appenda na lista, semelhante à função insertPhraseInDOM();
function initialRenderization() {
    if (localStorage.getItem('phrases') === null) {
        localStorage.setItem('phrases', JSON.stringify([]));
    } else {
        const phrasesList = JSON.parse(localStorage.getItem('phrases'));
        const listLength = phrasesList.length - 1;
        console.log(listLength);
        for (let index = 0; index <= listLength; index += 1) {
            const listElement = document.createElement('li');
            listElement.innerText = phrasesList[index];
            list.appendChild(listElement);
        }
    }
}

// Adicionando o evento de click no botão que chama a função para adicionar a frase no localStorage que, por sua vez, chama a função que adiciona no DOM;
button.addEventListener('click', addPhraseToLocalStorage);

// Adicionando o evento de loading inicial que deve chamar a função initialRenderization();
window.onload = function () {
    initialRenderization();
};