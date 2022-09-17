let listenUserAmount = document.getElementById("btn-square-selector");
let container = document.getElementById("container");
let mainWrapper = document.getElementById("main-wrapper")

let amount = 16*16

for (let i=0; i < amount; i++) {
    var cell = document.createElement("div");
    cell.setAttribute('class', 'blank');
    cell.setAttribute('id', i);
    container.appendChild(cell);
}

listenUserAmount.addEventListener('click', () => {

    let choosenAmount = prompt("Hoeveel vierkantjes wil je horizontaal? Graag onder de 100 blijven");
    if (choosenAmount > 100) {
        alert("Je hebt meer dan 100 ingevult, probeer het opnieuw.");
        return;
    } else {
        amount = choosenAmount * choosenAmount;

        container.remove();
        container = document.createElement("div");
        container.setAttribute('id', 'container');
        document.getElementById("main-wrapper").appendChild(container);
        document.getElementById("container").style.gridTemplateColumns = "repeat(" + choosenAmount + ", auto)";
        
        for (let i=0; i<amount; i++) {
            var cell = document.createElement("div");
            cell.setAttribute('class', 'blank');
            cell.setAttribute('id', i);
            container.appendChild(cell);
        }
    }
});