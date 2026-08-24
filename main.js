

const container = document.querySelector("#container")

let gridSize = 16
let squareSize = 40

function createGrid(amount, squareSize) {
    container.innerHTML = ""
    for (let i=0; i < (amount * amount); i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`
        container.appendChild(square)
}
}

createGrid(gridSize, squareSize)

const squares = document.querySelectorAll(".square")

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = "blue"
    }
})




const again = document.querySelector("#again")
again.addEventListener("click", () => {
    gridSize = prompt("Chosse size x * x: ")
    if (gridSize > 100) {
        gridSize = 100
    }
    squareSize = 640 / gridSize
    squares.forEach(square => {
        square.style.backgroundColor = "white"
    })
    createGrid(gridSize, squareSize)
})