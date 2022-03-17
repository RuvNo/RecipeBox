function entryItem(title, ingredients, directions) {
  (this.title = title), (this.ingredients = ingredients);
  this.directions = directions;
}

let lastElem = {};
let list = [];

function addElem() {
  var node = document.createElement("button");
  node.id = lastElem.title;
  node.class = "flat";
  node.addEventListener("click", useAgain);
  node.appendChild(document.createTextNode(lastElem.title));
  document.querySelector("ol").appendChild(node);
  document.getElementById("nameOutput").textContent = lastElem.title;
  document.getElementById("ingredientsOutput").textContent = lastElem.ingredients;
  document.getElementById("directionsOutput").textContent = lastElem.directions;
}

function createElement() {
  let title = document.getElementById("title").value;
  let ingredients = document.getElementById("ingredients").value;
  let directions = document.getElementById("directions").value;
  let elem = new entryItem(title, ingredients, directions);
  lastElem = elem;
  list.push(elem);
  document.getElementById("title").textContent = "";
  document.getElementById("ingredients").textContent = "";
  document.getElementById("directions").textContent = "";
  addElem();
}

function useAgain() {
  let elem = {};
  for (let i = 0; i < list.length; i++) {
    if (this.textContent === list[i].title) {
      elem = list[i];
      i = list.length;
    }
  }
  document.getElementById("nameOutput").textContent = elem.title;
  document.getElementById("ingredientsOutput").textContent = elem.ingredients;
  document.getElementById("directionsOutput").textContent = elem.directions;
}

document.getElementById("addNew").addEventListener("click", createElement);
