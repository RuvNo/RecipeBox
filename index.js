function entryItem(title, ingredients, directions) {
  (this.title = title), (this.ingredients = ingredients);
  this.directions = directions;
}

let Pizza = new entryItem("Pizza", "Tomato Sauce, Dough, Pepperoni, \nCheese", "Put ingredeints on the Dough. Sprinkle Cheese over it.");
let Hamburger = new entryItem("Hamburger", "Bun, Beef, Tomato, Cheese, Salad", "Take the two buns, put everything inbetween - done!");
let Wrap = new entryItem("Wrap", "Tortilla, Corn, Chicken, Salad, Salsa", "Take the Tortilla, put all the stuff in it and roll it up!");

let lastElem = {};
let list = [Pizza, Hamburger, Wrap];

document.getElementById("deleteButton").addEventListener("click", deleteElement);

const normal = {
  get title() {
    return document.getElementById("titleOutput");
  },
  get ingredients() {
    return document.getElementById("ingredientsOutput");
  },
  get directions() {
    return document.getElementById("directionsOutput");
  },
};

const popup = {
  get title() {
    return document.getElementById("titlePopup");
  },
  get ingredients() {
    return document.getElementById("ingredientsPopup");
  },
  get directions() {
    return document.getElementById("directionsPopup");
  },
  get submitChanges() {
    return document.getElementById("submitChangesPopup");
  },
  get complete() {
    return document.getElementById("myPopup");
  },
};

function addBasics() {
  for (item in list) {
    var node = document.createElement("button");
    node.id = list[item].title;
    node.classList.add("flat");
    node.addEventListener("click", useAgain);
    node.appendChild(document.createTextNode(list[item].title));
    document.querySelector("ol").appendChild(node);
    normal.title.textContent = list[item].title;
    normal.ingredients.textContent = list[item].ingredients;
    normal.directions.textContent = list[item].directions;
  }
}

function createElement() {
  let title = popup.title.value;
  let ingredients = popup.ingredients.value;
  let directions = popup.directions.value;
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
  normal.title.textContent.textContent = lastElem.title;
  normal.ingredients.textContent.textContent = lastElem.ingredients;
  normal.directions.textContent.textContent = lastElem.directions;
}

function useAgain() {
  let elem = {};
  for (let i = 0; i < list.length; i++) {
    if (this.textContent === list[i].title) {
      elem = list[i];
      i = list.length;
    }
  }
  normal.title.textContent = elem.title;
  normal.ingredients.textContent = elem.ingredients;
  normal.directions.textContent = elem.directions;
}

function deleteElement() {
  let itemTitle = normal.title.textContent;
  for (let i = 0; i < list.length; i++) {
    if (list[i].title === itemTitle) {
      document.getElementById(list[i].title).remove();
      list.splice(i, 1);
      normal.title.textContent.textContent = list[0].title;
      normal.ingredients.textContent.textContent = list[0].ingredients;
      normal.directions.textContent.textContent = list[0].directions;
    }
  }
}

function editElement(clickedID) {
  var myPopup = popup.complete;
  myPopup.classList.add("showForm");
  if (clickedID === "editButton") {
    popup.title.value = normal.title.textContent;
    popup.ingredients.value = normal.ingredients.textContent;
    popup.directions.value = normal.directions.textContent;
    popup.submitChanges.innerHTML = "Submit";
  } else {
    popup.submitChanges.innerHTML = "Add";
    popup.title.value = "";
    popup.ingredients.value = "";
    popup.directions.value = "";
  }
}

function submitEntry() {
  if (popup.submitChanges.innerHTML === "Add") {
    createElement();
  } else {
    let itemTitle = normal.title.textContent;
    for (let i = 0; i < list.length; i++) {
      if (list[i].title === itemTitle) {
        if (popup.title.value) {
          list[i].title = popup.title.value;
        }
        if (popup.ingredients.value) {
          list[i].ingredients = popup.ingredients.value;
        }
        if (popup.directions.value) {
          list[i].directions = popup.directions.value;
        }
        normal.title.textContent = list[i].title;
        normal.ingredients.textContent = list[i].ingredients;
        normal.directions.textContent = list[i].directions;
      }
    }
  }
  closePopup();
}

function closePopup() {
  var myPopup = popup.complete;
  myPopup.classList.remove("showForm");
  popup.title.value = "";
  popup.ingredients.value = "";
  popup.directions.value = "";
}

addBasics();
