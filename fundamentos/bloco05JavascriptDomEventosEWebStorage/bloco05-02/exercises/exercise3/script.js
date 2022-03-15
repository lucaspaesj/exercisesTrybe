// Criando e adicionando elementos para o HTML pelo JS
// 1- Crie um irmão para elementoOndeVoceEsta .

function createElementChild(id, nameElement, text){
    let pai = document.querySelector(id);
    let brother = document.createElement(nameElement);
    brother.id = text;
    
    pai.appendChild(brother);
}
document.querySelector("#pai").lastElementChild.id = "quartoFilho";
createElementChild("#pai", "section", "quintoEUltimoFilho");

// 2- Crie um filho para elementoOndeVoceEsta .

document.querySelector("#elementoOndeVoceEsta").lastElementChild.id = "segundoFilhoDoFilho";
createElementChild("#elementoOndeVoceEsta", "section", "terceiroEUltimoFilhoDoFilho");

// 3- Crie um filho para primeiroFilhoDoFilho .

let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
let filhoDoFilhoDoFilho = document.createElement("section");
primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);
filhoDoFilhoDoFilho.id = "primeiroFilhoDoFilhoDoFilho";

// 4- A partir desse filho criado, acesse terceiroFilho .

console.log(document.querySelector("#primeiroFilhoDoFilhoDoFilho").parentElement.parentElement.nextElementSibling);

// 5- Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

function removeChilds(nameFather, nameChild){
    let father = document.querySelector(nameFather);
    let child = document.querySelector(nameChild);
    father.removeChild(child);
}
removeChilds("#pai", "#primeiroFilho");
removeChilds("#pai", "#terceiroFilho");
removeChilds("#pai", "#quartoFilho");
removeChilds("#pai", "#quintoEUltimoFilho");
removeChilds("#elementoOndeVoceEsta", "#segundoFilhoDoFilho");
removeChilds("#elementoOndeVoceEsta", "#terceiroEUltimoFilhoDoFilho");
removeChilds("#primeiroFilhoDoFilho", "#primeiroFilhoDoFilhoDoFilho");