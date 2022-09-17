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

    let choosenAmount = prompt("How many squares do you want there to be on the horizontal line? Maximum allowed is 100 squares.");
    if (choosenAmount > 100) {
        alert("The number of squares is higher then is allowed. Please try again!");
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