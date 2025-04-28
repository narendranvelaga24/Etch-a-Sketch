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
      square.style.backgroundColor = "black";
    });

    square.style.width = `${90 / size}vh`;
    square.style.height = `${90 / size}vh`;
  }
}

const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100):");
    newSize = parseInt(newSize);
  
    if (newSize > 0 && newSize <= 100) {
      createGrid(newSize);
    } else {
      alert("Please enter a number between 1 and 100!");
    }
  });

createGrid(32);
