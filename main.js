let rgb = false
let gradient = false
let opacityPlus = true
let opacity = 1

const container = document.querySelector("#container")

let gridSize = 16
let squareSize = 40

const rgbBtn = document.querySelector("#rgb")
const gradientBtn = document.querySelector("#gradient")

gradientBtn.addEventListener("click", () => {
    if (gradient) {
        gradient = false
    } else {
        gradient = true
    }
    console.log(gradient)
})

rgbBtn.addEventListener("click", () => {
    if (rgb) {
        rgb = false
    } else {
        rgb = true
    }
})

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
        if (rgb) {
            let rgbRed = Math.floor(Math.random() * 256)  
            let rgbGreen = Math.floor(Math.random() * 256)
            let rgbBlue = Math.floor(Math.random() * 256)
            console.log(rgbBlue)
            color =  `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`
        } else if (gradient){
            if (opacity === 1) {
                opacityPlus = false
            } else if (opacity === 0.2) {
                opacityPlus = true
            }

            if (opacityPlus) {
                opacity += 0.1
                if (opacity > 1) {
                    opacity = 1
                }
            } else {
                opacity -= 0.1
                if (opacity < 0.2) {
                    opacity = 0.2
                }
            }
            e.target.style.opacity = opacity
            console.log(opacity)

        } else {
            color = "blue"
        }
        e.target.style.backgroundColor = color
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