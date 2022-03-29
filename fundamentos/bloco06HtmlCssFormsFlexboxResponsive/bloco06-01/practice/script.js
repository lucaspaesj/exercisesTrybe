let btnSend = document.getElementById("buttonSubmit");
let btnEraseAll = document.getElementById("buttonEraseAll");
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputRadio = document.getElementById("pref1");
let textArea = document.getElementById("answer");
let inputDate = document.getElementById("date");
let inputCheck1 = document.getElementById("check1");
let inputCheck2 = document.getElementById("check2");

btnSend.addEventListener("click", function(event){
    if(inputName.value.length > 40 || inputName.value.length < 10){
        alert("Dados inválidos");
        event.preventDefault();
    }
    else if(inputEmail.value.length > 50 || inputEmail.value.length < 10){
        alert("Dados inválidos");
        event.preventDefault();
    }
    else{
        alert("Dados enviados com sucesso!");
    }
})

btnEraseAll.addEventListener("click", eraseAll);

function eraseAll() {
    inputName.value = "";
    inputEmail.value = "";
    inputRadio.checked = true;
    textArea.value = "";
    inputDate.value = "";
    inputCheck1.checked = false;
    inputCheck2.checked = false;
}