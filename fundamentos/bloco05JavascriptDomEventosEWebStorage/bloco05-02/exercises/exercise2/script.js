// 1- Acesse o elemento elementoOndeVoceEsta .
console.log(document.querySelector("#elementoOndeVoceEsta"));
// 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
function alterColorFather(id, color){
    let elemento = document.querySelector(id).parentNode;
    console.log(elemento);
    elemento.style.backgroundColor = color;
}
alterColorFather("#elementoOndeVoceEsta", "blue");
// 3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
function alterTextFirstChildOfChild(id, text){
    let elemento = document.querySelector(id).firstElementChild;
    console.log(elemento);
    elemento.innerText = text;
}
alterTextFirstChildOfChild("#elementoOndeVoceEsta", "Olá mundo!");
// 4- Acesse o primeiroFilho a partir de pai.
console.log(document.querySelector("#pai").firstElementChild);
// 5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector("#elementoOndeVoceEsta").previousElementSibling);
// 6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling);
// 7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector("#elementoOndeVoceEsta").nextElementSibling);
// 8- Agora acesse o terceiroFilho a partir de pai .
console.log(document.querySelector("#pai").lastElementChild.previousElementSibling);