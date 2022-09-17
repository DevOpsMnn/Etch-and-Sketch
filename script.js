var container = document.getElementById("container");

amount = 16*16

for (let i=0; i<amount; i++) {
    var cell = document.createElement("div");
    cell.setAttribute('id', i);
    cell.innerHTML = i;
    container.appendChild(cell);
}