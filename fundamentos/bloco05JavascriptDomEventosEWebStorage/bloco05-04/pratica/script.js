// As pessoas devem ter o poder de alterar:
// 1- Cor de fundo da tela:
let inputOne = document.getElementById("inputBackgroundColor");
let btnOne = document.getElementById("btnChangeBackgroundColor");

// referência do próximo código: https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
let isColor = function (strColor) {
    let s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}

// referência do próximo código: https://stackoverflow.com/questions/18042133/check-if-input-is-number-or-letter-javascript
let isNumber = function (param) {
    var x = param.value;
    var regex = /^[0-9]+$/;
    if (!x.match(regex)) {
        return false;
    }
    else {
        return true;
    }
}

let isFontValid = function (strFont) {
    let fonts = ["Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New", "Brush Script MT"];
    for(let font of fonts){
        if(strFont !== font){
            return false;
        }
        return true;
    }
}


btnOne.addEventListener("click", changeBackgroundColor);
inputOne.addEventListener("keyup", getKeyOne);

function changeBackgroundColor() {
    let body = document.querySelector("body");
    let value = inputOne.value;
    if (isColor(value)) {
        body.style.backgroundColor = inputOne.value;
        localStorage.removeItem("backgroundColor");
        localStorage.setItem("backgroundColor", value);
        inputOne.value = "";
        alert("Cor sendo implementada no fundo da página 🔥");
    }
    else {
        inputOne.value = "";
        alert("Cor inválida, lembre-se de digitar em inglês 😀");
    }
}

function getKeyOne(event) {
    let key = event.key;
    if (key === "Enter") {
        changeBackgroundColor();
    }
}

// 2- Cor do texto:
let inputTwo = document.getElementById("inputColor");
let btnTwo = document.getElementById("btnChangeColor");

btnTwo.addEventListener("click", changeColor);
inputTwo.addEventListener("keyup", getKeyTwo);

function changeColor() {
    let section = document.querySelector("#sectionOne");
    let value = inputTwo.value;
    if (isColor(value)) {
        section.style.color = inputTwo.value; sectionTextColor
        localStorage.removeItem("sectionTextColor");
        localStorage.setItem("sectionTextColor", value);
        inputTwo.value = "";
        alert("Cor sendo implementada no texto 🔥");
    }
    else {
        inputTwo.value = "";
        alert("Cor inválida, lembre-se de digitar em inglês 😀");
    }
}

function getKeyTwo(event) {
    let key = event.key;
    if (key === "Enter") {
        changeColor();
    }
}

// 3- Tamanho da fonte;

let inputThree = document.getElementById("inputFontSize")
let btnThree = document.getElementById("btnChangeFontSize");

btnThree.addEventListener("click", changeFontSize);
inputThree.addEventListener("keyup", getKeyThree);

function changeFontSize() {
    let section = document.getElementById("sectionOne");
    let value = inputThree.value;
    if (isNumber(inputThree)) {
        section.style.fontSize = value + "px";
        localStorage.removeItem("sectionTextSize");
        localStorage.setItem("sectionTextSize", value);
        inputThree.value = "";
        alert("Tamanho da letra sendo modificado 🔥");
    }
    else {
        inputThree.value = "";
        alert("O valor inserido não é válido, apenas números são aceitos 😀");
    }
}

function getKeyThree(event) {
    let key = event.key;
    if (key === "Enter") {
        changeFontSize();
    }
}

// 4- Espaçamento entre as linhas do texto;

let inputFour = document.getElementById("inputLineSpacing");
let btnFour = document.getElementById("btnChangeLineSpacing");

inputFour.addEventListener("keyup", getKeyFour);

function changeLineSpacing() {
    let section = document.getElementById("sectionOne");
    let value = inputFour.value;
    if (isNumber(inputFour)) {
        section.style.lineHeight = value + "px";
        localStorage.removeItem("sectionLineSpacing");
        localStorage.setItem("sectionLineSpacing", value);
        inputFour.value = "";
        alert("Espaçamento entre linhas do texto sendo alterado 🔥");
    }
    else {
        inputFour.value = "";
        alert("O valor inserido não é válido, apenas números são aceitos 😀");
    }
}

function getKeyFour(event) {
    let key = event.key;
    if (key === "Enter") {
        changeLineSpacing();
    }
}

// 5- Tipo da fonte ( Font family ):

let inputFive = document.getElementById("inputFontFamily");
let btnFive = document.getElementById("btnChangeFontFamily");

inputFive.addEventListener("keyup", getKeyFive);

function changeFontFamily(){
    let section = document.getElementById("sectionOne");
    value = inputFive.value;
    if(isFontValid(value)){
        section.style.fontFamily = value;
        localStorage.removeItem("sectionFontFamily");
        localStorage.setItem("sectionFontFamily", value);
        inputFive.value = "";
        alert("Estilo de fonte do texto sendo alterado 🔥");
    }
    else{
        inputFive.value = "";
        alert("A fonte selecionada não é válida, lembre-se de checar as fontes disponíveis no link acima do botão de mudança 😀");
    }
}

function getKeyFive(event) {
    let key = event.key;
    if (key === "Enter") {
        changeFontFamily();
    }
}

window.onload = function () {
    if (localStorage.getItem("backgroundColor") === null) {
        localStorage.setItem("backgroundColor", "white");
    }
    else {
        let body = document.querySelector("body");
        body.style.backgroundColor = localStorage.getItem("backgroundColor");
    }
    if (localStorage.getItem("sectionTextColor") === null) {
        localStorage.setItem("sectionTextColor", "black");
    }
    else {
        let section = document.querySelector("#sectionOne");
        section.style.color = localStorage.getItem("sectionTextColor");
    }
    if (localStorage.getItem("sectionTextSize") === null) {
        localStorage.setItem("sectionTextSize", "20px");
    }
    else {
        let section = document.querySelector("#sectionOne");
        section.style.fontSize = localStorage.getItem("sectionTextSize") + "px";
    }
    if (localStorage.getItem("sectionLineSpacing") === null) {
        localStorage.setItem("sectionLineSpacing", "25px");
    }
    else {
        let section = document.querySelector("#sectionOne");
        section.style.lineHeight = localStorage.getItem("sectionLineSpacing") + "px";
    }
    if (localStorage.getItem("sectionFontFamily") === null) {
        localStorage.setItem("sectionFontFamily", "Arial");
    }
    else {
        let section = document.querySelector("#sectionOne");
        section.style.fontFamily = localStorage.getItem("sectionFontFamily");
    }
}