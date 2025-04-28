const container = document.getElementById("container");

function createGrid(size) {
  container.innerHTML = "";
  container.style.width = "600px";
  container.style.height = "600px";

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    square.style.width = `${600 / size}px`;
    square.style.height = `${600 / size}px`;
  }
}

createGrid(16);
