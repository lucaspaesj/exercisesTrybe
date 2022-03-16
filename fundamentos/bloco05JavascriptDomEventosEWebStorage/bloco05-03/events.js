// Conteúdo do vídeo:
// Eventos - 
// Permitem que nossas páginas sejam dinâmicas
// Podem ser disparados por uma ação visível da pessoa usuária ou pelo próprio navegador

// Eventos disparados pelo DOM
// on-event handler

/*
window.onload = occursOnLoad;

function occursOnLoad(){
    alert("Página foi carregada");
}
*/

// Eventos declarados na linha do HTML
// inline event handler

/*
function userClick(){
    let element = document.getElementById("paragraphCongrats");
    element.innerText = "Parabéns, você clicou no botão! VQV!";
}
*/

// No entanto, utilizar atributos HTML de escutadores de eventos não é uma prática recomendada, por alguns motivos. Um deles é que o ideal é não misturar o seu código HTML com o código JavaScript. Outro motivo é que, se você precisar adicionar events listeners em muitos elementos, ou mesmo precisar mudar qual função é adicionada como resposta a esses eventos nesses elementos depois, fica complicado ter de adicionar manualmente a propriedade em cada um dos elementos. Por essas razões, utilizar eventos inline (como são chamados eventos adicionados diretamente no HTML) é considerada uma má prática.

// addEventListener(tipoEvento, função); - Permite adicionar "escutadores" de forma mais flexível;
// Código JS somente na parte JavaScript;
// No seu uso mais comum, addEventListener recebe dois parâmetros:
// O evento que estamos esperando escutar: Exemplos: click , change , mouseover etc;
// A função (criada por você) que será executada quando o evento acontecer.

let mouseClickBtn = document.getElementById("btnClick");

mouseClickBtn.addEventListener("click", userClick);

function userClick(){
    console.log("Parabéns, você clicou no botão!")
}