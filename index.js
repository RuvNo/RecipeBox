function entryItem(title, ingredients, directions) {
  (this.title = title), (this.ingredients = ingredients);
  this.directions = directions;
}

let Pizza = new entryItem("Pizza", "Tomato Sauce, Dough, Pepperoni, Cheese", "Put ingredeints on the Dough. Sprinkle Cheese over it.");
let Hamburger = new entryItem("Hamburger", "Bun, Beef, Tomato, Cheese, Salad", "Take the two buns, put everything inbetween - done!");
let Wrap = new entryItem("Wrap", "Tortilla, Corn, Chicken, Salad, Salsa", "Take the Tortilla, put all the stuff in it and roll it up!");

let lastElem = {};
let list = [Pizza, Hamburger, Wrap];

// document.getElementById("addButton").addEventListener("click", createElement);
document.getElementById("deleteButton").addEventListener("click", deleteElement);

function addBasics() {
  for (item in list) {
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

function createElement() {
  let title = document.getElementById("titlePopup").value;
  let ingredients = document.getElementById("ingredientsPopup").value;
  let directions = document.getElementById("directionsPopup").value;
  let elem = new entryItem(title, ingredients, directions);
  lastElem = elem;
  list.push(elem);
  addElem();
}

function addElem() {
  var node = document.createElement("button");
  node.id = lastElem.title;
  node.classList.add("flat");
  node.addEventListener("click", useAgain);
  node.appendChild(document.createTextNode(lastElem.title));
  document.querySelector("ol").appendChild(node);
  document.getElementById("nameOutput").textContent = lastElem.title;
  document.getElementById("ingredientsOutput").textContent = lastElem.ingredients;
  document.getElementById("directionsOutput").textContent = lastElem.directions;
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

function deleteElement() {
  let itemTitle = document.getElementById("nameOutput").textContent;
  for (let i = 0; i < list.length; i++) {
    if (list[i].title === itemTitle) {
      document.getElementById(list[i].title).remove();
      list.splice(i, 1);
      document.getElementById("nameOutput").textContent = list[0].title;
      document.getElementById("ingredientsOutput").textContent = list[0].ingredients;
      document.getElementById("directionsOutput").textContent = list[0].directions;
    }
  }
}

function editElement(clickedID) {
  var popup = document.getElementById("myPopup");
  popup.classList.add("showForm");
  if (clickedID === "editButton") {
    document.getElementById("titlePopup").value = document.getElementById("nameOutput").textContent;
    document.getElementById("ingredientsPopup").value = document.getElementById("ingredientsOutput").textContent;
    document.getElementById("directionsPopup").value = document.getElementById("directionsOutput").textContent;
    document.getElementById("submitChangesPopup").innerHTML = "Submit";
  } else {
    document.getElementById("submitChangesPopup").innerHTML = "Add";
    document.getElementById("titlePopup").value = "";
    document.getElementById("ingredientsPopup").value = "";
    document.getElementById("directionsPopup").value = "";
  }
}

function submitEntry() {
  if (document.getElementById("submitChangesPopup").innerHTML === "Add") {
    createElement()
  } else {
    let itemTitle = document.getElementById("nameOutput").textContent;
    for (let i = 0; i < list.length; i++) {
      if (list[i].title === itemTitle) {
        if (document.getElementById("titlePopup").value) {
          list[i].title = document.getElementById("titlePopup").value;
        }
        if (document.getElementById("ingredientsPopup").value) {
          list[i].ingredients = document.getElementById("ingredientsPopup").value;
        }
        if (document.getElementById("directionsPopup").value) {
          list[i].directions = document.getElementById("directionsPopup").value;
        }
        document.getElementById("nameOutput").textContent = list[i].title;
        document.getElementById("ingredientsOutput").textContent = list[i].ingredients;
        document.getElementById("directionsOutput").textContent = list[i].directions;
      }
    }
  }
  var popup = document.getElementById("myPopup");
  popup.classList.remove("showForm");
}

addBasics();