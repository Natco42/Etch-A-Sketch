const containerDiv = document.querySelector("#container");

function makeRows(rows, cols) {
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      cell.innerText = (i + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);
