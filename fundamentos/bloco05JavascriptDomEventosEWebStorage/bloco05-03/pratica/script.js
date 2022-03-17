function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/*
Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector("#days");

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const days = dezDaysList[i];
        const dayToAdd = document.createElement("li");
        dayToAdd.innerText = days;
        if (days === 24 || days === 31) {
            dayToAdd.className = "day holiday";
        }
        else if (days === 25) {
            dayToAdd.className = "day holiday friday";
        }
        else if (days === 4 || days === 11 || days === 18) {
            dayToAdd.className = "day friday";
        }
        else {
            dayToAdd.className = "day";
        }
        monthDaysList.appendChild(dayToAdd);
    }
}

createDays();

/*
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function createBtn(str) {
    let divBtn = document.querySelector(".buttons-container");
    let btn = document.createElement("button");
    btn.innerText = str;
    btn.id = "btn-holiday";
    divBtn.appendChild(btn);
}

createBtn("Feriados");

/*
Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

let btnHoliday = document.getElementById("btn-holiday");
let holidays = document.getElementsByClassName("holiday");

function changeBackgroundColor(color) {
    for (let i = 0; i < holidays.length; i += 1) {
        holidays[i].style.backgroundColor = color;
    }
}

changeBackgroundColor("rgb(238,238,238)");

function changeHolidays() {
    for (let holiday of holidays) {
        if (holiday.style.backgroundColor === "rgb(238, 238, 238)") {
            changeBackgroundColor("white");
        }
        else if (holiday.style.backgroundColor === "white") {
            changeBackgroundColor("rgb(238, 238, 238)");
        }
    }
}

btnHoliday.addEventListener("click", changeHolidays);

/* 
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function btnSexta(str) {
    let divParent = document.querySelector(".buttons-container");
    let btn = document.createElement("button");
    btn.innerText = str;
    btn.id = "btn-friday";
    divParent.appendChild(btn);
}

btnSexta("Sexta-feira");

/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

let fridays = document.getElementsByClassName("friday");
let btnFriday = document.getElementById("btn-friday");

function clickBtnFriday() {
    if (fridays[0].innerText === "SEXTOUUU!!!") {
        fridays[0].innerText = "4";
        fridays[1].innerText = "11";
        fridays[2].innerText = "18";
        fridays[3].innerText = "25";
    }
    else {
        fridays[0].innerText = "SEXTOUUU!!!";
        fridays[1].innerText = "SEXTOUUU!!!";
        fridays[2].innerText = "SEXTOUUU!!!";
        fridays[3].innerText = "SEXTOUUU!!!";
    }
}

btnFriday.addEventListener("click", clickBtnFriday);
