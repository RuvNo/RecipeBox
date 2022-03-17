function entryItem(title, ingredients, directions) {
  (this.title = title), (this.ingredients = ingredients);
  this.directions = directions;
}

let Pizza = new entryItem("Pizza", "Tomato Sauce, Dough, Pepperoni, Cheese", "Put ingredeints on the Dough. Sprinkle Cheese over it.");
let Hamburger = new entryItem("Hamburger", "Bun, Beef, Tomato, Cheese, Salad", "Take the two buns, put everything inbetween - done!");

let lastElem = {};
let list = [Pizza, Hamburger];

function addBasics() {
  for (item in list) {
    console.log(item);
    console.log(item.title);
    var node = document.createElement("button");
    node.id = list[item].title;
    node.classList.add("flat");
    node.addEventListener("click", useAgain);
    node.appendChild(document.createTextNode(list[item].title));
    document.querySelector("ol").appendChild(node);
    document.getElementById("nameOutput").textContent = list[item].title;
    document.getElementById("ingredientsOutput").textContent = list[item].ingredients;
    document.getElementById("directionsOutput").textContent = list[item].directions;
  }
}

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

document.getElementById("addButton").addEventListener("click", createElement);
addBasics();
