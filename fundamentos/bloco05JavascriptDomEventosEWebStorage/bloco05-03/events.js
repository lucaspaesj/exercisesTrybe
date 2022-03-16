// Conteúdo do vídeo:
// Eventos - 
// Permitem que nossas páginas sejam dinâmicas
// Podem ser disparados por uma ação visível da pessoa usuária ou pelo próprio navegador

// Eventos disparados pelo DOM
// on-event handler
window.onload = occursOnLoad;

function occursOnLoad(){
    alert("Página foi carregada");
}

// Eventos declarados na linha do HTML
// inline event handler

function userClick(){
    let element = document.getElementById("paragraphCongrats");
    element.innerText = "Parabéns, você clicou no botão! VQV!";
}
