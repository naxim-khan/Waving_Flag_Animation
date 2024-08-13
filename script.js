setTimeout(() => {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('loader-bg').style.display = 'none';
  document.getElementById('content').style.display = 'block';
  document.getElementById('content').style.display = 'block';
}, 5000); 

const flagEl = document.getElementById("flag");

const rows = 50;
const columns = 75;

const centerColumn = Math.floor(columns / 2);
const centerRow = Math.floor(rows / 2);

const outerRadius = 12; 
const innerRadius = 9;  

const starSize = 3;

const generateUnit = (columnNum, rowNum) => {
  const flagUnit = document.createElement("div");
  flagUnit.classList.add("flag-unit");
  if (columnNum < 15) {
    flagUnit.style.backgroundColor = "white";
  }
  // Distance from center
  const distanceFromCenter = Math.sqrt(
    Math.pow(columnNum - centerColumn, 2) + Math.pow(rowNum - centerRow, 2)
  );

  const isInCrescent = (
    distanceFromCenter < outerRadius && distanceFromCenter > innerRadius &&
    columnNum < centerColumn 
  );

  const isInStar = (
    Math.abs(columnNum - centerColumn) <= starSize &&
    Math.abs(rowNum - centerRow) <= starSize &&
    (Math.abs(columnNum - centerColumn) + Math.abs(rowNum - centerRow)) <= starSize
  );

  if (isInCrescent || isInStar) {
    flagUnit.style.backgroundColor = "white";
  }

  flagUnit.style.setProperty("animation-delay", `${columnNum * 10}ms`);
  flagUnit.style.setProperty("--displacement", `${columnNum / 4}px`);

  const column = document.getElementById(`column-${columnNum}`);
  column.innerHTML += flagUnit.outerHTML;
};

for (let i = 0; i < columns; i++) {
  flagEl.innerHTML += `<div class="column" id="column-${i}"></div>`;
  for (let j = 0; j < rows; j++) {
    generateUnit(i, j);
  }
}
