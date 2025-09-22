const gridDim = Math.min(prompt("Enter grid dimension"), 1000)

const container = document.querySelector("#container");

for (let i = 0; i <= gridDim-1; i++) {
    const divMain = document.createElement("div");
    // divMain.classList.add(`div-${i}`);
    divMain.classList.add(`div-${i}`);
    container.appendChild(divMain)
    divMain.style = "display: flex; text-align: center;";
    
    for (let j = 0; j <= gridDim-1; j++){
        const div = document.createElement("div");
        div.classList.add("square");
        div.textContent = " ";
        // Maximum grid-size is 960px x 960px so need to do math to divide grid sizes into equal squares
        const dim = 960/gridDim
        div.style = `color: white; background: rgba(0,0,0,0); flex: 1; width: ${dim}px; height: ${dim}px`
        divMain.appendChild(div);
    }

}

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        colorBackground(square);
    })
})

function colorBackground(square) {
    let bg = window.getComputedStyle(square).getPropertyValue("background-color");
    // bg looks like "rgba(0, 0, 0, 0.3)" or "rgb(0, 0, 0)" if no alpha
    let match = bg.match(/rgba?\(\s*\d+,\s*\d+,\s*\d+(?:,\s*([\d.]+))?\)/);

    let currentOpacity = 0;
    if (match) {
        currentOpacity = match[1] !== undefined ? parseFloat(match[1]) : 1; // default 1 if rgb
    }

    // increase opacity by 0.1 each time, max 1
    let newOpacity = Math.min(currentOpacity + 0.1, 1);
    square.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
}
