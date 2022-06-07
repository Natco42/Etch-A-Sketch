

//creates grid
const containerDiv = document.querySelector("#container");
const gridItem = document.getElementById('gridItem');
function makeRows(rows, cols) {
  while (document.querySelector("button") !== null) {
    document.querySelector("button").remove();
  }
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-cols', cols);
    containerDiv.style.width = "900px";
    containerDiv.style.height = "900px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * cols); i++) {
      let cube = document.createElement("div");
      container.appendChild(cube).className = "gridItem";
      cube.addEventListener("mouseover", () => {
          cube.style.backgroundColor = 'black';
      });
    };
  resetButton ();
};

function resetButton () {
  const buttonDiv = document.querySelector("#buttonDiv");
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset Grid";
  resetButton.style.margin = "20px";
  buttonDiv.appendChild(resetButton);

  resetButton.addEventListener('click', () => {
    document.querySelectorAll(".gridItem").forEach(e => e.remove());
    let userInput = prompt("Please enter a number between 1 and 100.");
    if (userInput > 100) {
      alert("I'm sorry you've messed up the Emperor's groove. Please try again.");
      return;
    }
    rows = userInput;
    cols = userInput;
    makeRows (rows, cols);
  })


}
makeRows(16, 16);
  


