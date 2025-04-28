const container = document.getElementById('container');

function createGrid(size) {
  container.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = i + 1;
    container.appendChild(square);
  }
}

createGrid(16);


