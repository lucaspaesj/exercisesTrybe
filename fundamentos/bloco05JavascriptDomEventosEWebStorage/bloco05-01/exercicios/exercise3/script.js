// document.getElementByClassName - Seleciona elementos 

let pilotosDeF1 = document.getElementsByClassName("piloto-f1-atual");

// Alterando todos os elementos que possuem a classe "piloto-f1-atual"

for(let i = 0; i < pilotosDeF1.length; i += 1){
    pilotosDeF1[i].innerText = "Lewis Hamilton";
}