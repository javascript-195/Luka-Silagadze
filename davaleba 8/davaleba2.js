const idElement = document.getElementById("special");
const classElement = document.querySelectorAll(".alert");
const alertStop = document.querySelectorAll(".alert.stop ");
const alertGo = document.querySelectorAll(".alert.go ");


idElement.style.backgroundColor = "yellow";

classElement.forEach(element => {
    element.style.border = "1px solid gray"
});

alertStop.forEach(element => {
    element.style.backgroundColor = "red"
});

alertGo.forEach(element => {
    element.style.backgroundColor = "green"
});