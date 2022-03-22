function entryItem(title, ingredients, directions) {
  (this.title = title), (this.ingredients = ingredients);
  this.directions = directions;
}

let Pizza = new entryItem(
  "Pizza",
  "-Tomato Sauce,\n-Dough,\n-Pepperoni,\n-Onions,\n-Corn,\n-Cheese",
  "1. Roll out the Dough\n2. Put ingredients on the Dough\n3. Sprinkle Cheese over it\n4. Put it in the oven\n5. Wait for about 20 minutes\n6. Enjoy your food!"
);
let Hamburger = new entryItem(
  "Hamburger",
  "-Bun,\n-Beef,\n-Salad,\n-Onions,\n-Sauce,\n-Cheese,\n-Cucumber",
  "1. Separate the top and bottom bun\n2. Put your sauce on both buns\n3. Place the beef on the bottom bun\n4. Put the cheese on the beef\n5. Add the salad, onions and cucumbers\n6. Enjoy the taste!"
);
let Wrap = new entryItem(
  "Wrap",
  "-Tortilla,\n-Corn,\n-Pulled Chicken,\n-Salsa,\n-Onions,\n-Salad,\n-Beans",
  "1. Take the Tortilla and put salsa on it\n2. Spread the chicken on there\n3. Sprinkle Cheese over it\n4. Put the beans on the pile\n5. Disperse the onions and salad\n6. Roll it up - and enjoy!"
);

let recipeList = [Wrap, Hamburger, Pizza];

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
  for (item in recipeList) {
    var node = document.createElement("button");
    node.id = recipeList[item].title;
    node.classList.add("flat");
    node.addEventListener("click", showElementDetails);
    node.appendChild(document.createTextNode(recipeList[item].title));
    document.querySelector("ol").appendChild(node);
    normal.title.textContent = recipeList[item].title;
    normal.ingredients.textContent = recipeList[item].ingredients;
    normal.directions.textContent = recipeList[item].directions;
  }
}

function createElement() {
  let elem = new entryItem(popup.title.value, popup.ingredients.value, popup.directions.value);
  recipeList.push(elem);
  addElementToNode();
}

function addElementToNode() {
  var node = document.createElement("button");
  let lastElem = recipeList[recipeList.length - 1];
  node.id = lastElem.title;
  node.classList.add("flat");
  node.addEventListener("click", showElementDetails);
  node.appendChild(document.createTextNode(lastElem.title));
  document.querySelector("ol").appendChild(node);
  normal.title.textContent = lastElem.title;
  normal.ingredients.textContent = lastElem.ingredients;
  normal.directions.textContent = lastElem.directions;
}

function showElementDetails() {
  let elem = {};
  for (let i = 0; i < recipeList.length; i++) {
    if (this.textContent === recipeList[i].title) {
      elem = recipeList[i];
      i = recipeList.length;
    }
  }
  normal.title.textContent = elem.title;
  normal.ingredients.textContent = elem.ingredients;
  normal.directions.textContent = elem.directions;
}

function deleteElement() {
  let itemTitle = normal.title.textContent;
  for (let i = 0; i < recipeList.length; i++) {
    if (recipeList[i].title === itemTitle) {
      document.getElementById(recipeList[i].title).remove();
      recipeList.splice(i, 1);
      normal.title.textContent = recipeList[0].title;
      normal.ingredients.textContent = recipeList[0].ingredients;
      normal.directions.textContent = recipeList[0].directions;
    }
  }
}

function editElement(clickedID) {
  popup.complete.classList.add("showForm");
  document.getElementById("fullBackground").classList.add("faded");
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
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].title === itemTitle) {
        if (popup.title.value) {
          recipeList[i].title = popup.title.value;
        }
        if (popup.ingredients.value) {
          recipeList[i].ingredients = popup.ingredients.value;
        }
        if (popup.directions.value) {
          recipeList[i].directions = popup.directions.value;
        }
        normal.title.textContent = recipeList[i].title;
        normal.ingredients.textContent = recipeList[i].ingredients;
        normal.directions.textContent = recipeList[i].directions;
      }
    }
  }
  closePopup();
}

function closePopup() {
  popup.complete.classList.remove("showForm");
  document.getElementById("fullBackground").classList.remove("faded");
  popup.title.value = "";
  popup.ingredients.value = "";
  popup.directions.value = "";
}

addBasics();
