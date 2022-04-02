const btnClick = document.getElementById("btnClick");
const pClicks = document.getElementById("counter");
let counterClicks = 0;
window.onload = () => {
    btnClick.addEventListener("click", () => {
        counterClicks += 1;
        pClicks.innerText = counterClicks;
    })
}