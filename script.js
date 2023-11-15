const container = document.getElementById("container");
const button = document.querySelector("button");

function createGrid(size){
    container.innerHTML = "";
    for (let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
        }
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", handleMouseOver);

    });
}
function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function handleMouseOver (e){
    const randomColor = getRandomColor();
    e.target.style.backgroundColor = randomColor;
}

function createNewGrid(){
    let newSize = prompt("Enter the number of squares per side (max 100):");
    newSize = parseInt(newSize);

    if(isNaN(newSize) || newSize <= 0 || newSize > 100){
        alert("Please enter a valid number between 1 and 100");
        return;
    }
    const totalPixels = 960;
    const squareSize = totalPixels / newSize;

    container.style.width = `${totalPixels}px`;
    container.style.height = `${totalPixels}px`;

    document.querySelectorAll(".square").forEach(square => square.remove());
    createGrid(newSize);
}
createGrid(16);
