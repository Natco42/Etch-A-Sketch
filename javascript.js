const containerDiv = document.querySelector("#container");
const gridItem = document.getElementById('gridItem');
function makeRows(rows, cols) {
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cube = document.createElement("div");
      container.appendChild(cube).className = "gridItem";
      cube.addEventListener("mouseover", () => {
          cube.style.backgroundColor = 'black';
      });
    };
};
  
makeRows(16, 16);
  


