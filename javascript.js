const gridDim = Math.min(prompt("Enter grid dimension"), 100)

const container = document.querySelector("#container");

for (let i = 0; i <= gridDim-1; i++) {
    const divMain = document.createElement("div");
    divMain.classList.add(`div-${i}`);
    container.appendChild(divMain)
    divMain.style = "outline: 1px solid black; display: flex; text-align: center;";
    
    for (let j = 0; j <= gridDim-1; j++){
        const div = document.createElement("div");
        div.classList.add(`div-${i}-${j}`);
        div.textContent = "-";    
        // Maximum grid-size is 960px x 960px so need to do math to divide grid sizes into equal squares
        const dim = 960/gridDim
        div.style = `outline: 1px solid black; flex: 1; width: ${dim}px; height: ${dim}px`
        divMain.appendChild(div);
    }

}