const container = document.querySelector("div");
const grid = document.createElement("div");
const row = document.createElement("div");

row.className = "row";
grid.className = "grid";
console.log(row);

for (let i = 0;i < 16;i++){
	row.appendChild(grid.cloneNode(true));
}

for (let i = 0;i < 16;i++){
	container.appendChild(row.cloneNode(true));
}
