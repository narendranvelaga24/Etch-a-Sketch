let currentMode = "black";

const container = document.getElementById("container");
function createGrid(size) {
  container.innerHTML = "";
  container.style.width = "90vh";
  container.style.height = "90vh";

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseenter", () => {
      if (currentMode === "black") {
        square.style.backgroundColor = "black";
      } else if (currentMode === "random") {
        square.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
      } else if (currentMode === "darken") {
        let currentOpacity = Number(square.dataset.opacity) || 0;
        if (currentOpacity < 1) {
          currentOpacity += 0.1;
          square.dataset.opacity = currentOpacity;
          square.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
        }
      }
    });

    square.style.width = `${90 / size}vh`;
    square.style.height = `${90 / size}vh`;
  }
}

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (max 100):");
  newSize = parseInt(newSize);

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100!");
  }
});

const randomColorBtn = document.getElementById("randomColorBtn");
randomColorBtn.addEventListener("click", () => {
  currentMode = "random";
});

const darkenBtn = document.getElementById("darkenBtn");
darkenBtn.addEventListener("click", () => {
  currentMode = "darken";
});

const blackBtn = document.getElementById("blackBtn");
blackBtn.addEventListener("click", () => {
  currentMode = "black";
});

createGrid(8);
