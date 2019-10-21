
// Fills the grid with cells and makes them hoverable.
// gridSize is the side length of the grid
const populateGrid = (gridSize) => {
    const gridContainer = document.querySelector(".grid");

    gridContainer.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`


    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
    }
    document.querySelectorAll(".cell").forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            event.target.classList.add("hovered");
        });
    });
};


// Toggles visibility of the grid size popup.
const togglePopup = () => {
    document.querySelector(".popup").classList.toggle("hidden");
    document.querySelector(".darken").classList.toggle("hidden");
};

// Deletes old cells.
const clearCells = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((element) => {
        element.remove();
    });
};

// Reset button.
document.querySelector(".reset").addEventListener("click", () => {
    togglePopup();
});

// Popup submit.
document
    .querySelector(".popup button")
    .addEventListener("click", () => {
        if (document.querySelector(".popup input").value > 128 ||
        document.querySelector(".popup input").value < 4) return; // verify input
        togglePopup();
        clearCells();
        populateGrid(document.querySelector(".popup input").value);
    });

// Default value
populateGrid(16);