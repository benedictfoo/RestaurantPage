import "../css/menu.css";
const contentElement = document.querySelector("#content");
contentElement.innerHTML = "";
const menusElement = document.createElement("div");
menusElement.classList.add("menus");
const menusHeadingElement = document.createElement("h1");
menusHeadingElement.textContent = "Our food";
contentElement.appendChild(menusHeadingElement);
// For Humans
const humanMenuElement = document.createElement("div");
menusElement.appendChild(humanMenuElement);
const humanMenuHeadingElement = document.createElement("h2");
humanMenuHeadingElement.textContent = "Food for humans";
humanMenuElement.appendChild(humanMenuHeadingElement);
contentElement.appendChild(menusElement);
// Humans list
const humanMenuList = document.createElement("ul");
humanMenuList.setAttribute("role", "list");
humanMenuElement.appendChild(humanMenuList);
humanMenuElement.classList.add("menu");
function generateList(arrayOfFoodsAndPrices, listElement) {
  arrayOfFoodsAndPrices.forEach((item) => {
    const listItemElement = document.createElement("li");
    const listItemNameElement = document.createElement("span");
    const listItemPriceElement = document.createElement("span");
    listItemNameElement.textContent = item[0];
    listItemPriceElement.textContent = item[1];
    listItemElement.appendChild(listItemNameElement);
    listItemElement.appendChild(listItemPriceElement);
    listElement.appendChild(listItemElement);
  });
}
const humanFoodList = [
  ["ALL DAY BREAKFAST", 350],
  ["OATS AND FRUITS", 100],
  ["CAESAR SALAD", 200],
  ["ARABIATTA PENNE PASTA", 265],
  ["ALFREDO PASTA", 275],
  ["MUSHROOM BRUSCHETTA", 245],
  ["FOIE PEPPERS BRUSCHETTA", 225],
  ["FOIE PEPPERS BRUSCHETTA", 245],
  ["CHICKEN CLASSIC BRUSCHETTA", 255],
  ["VEG CLASSIC PIZZA", 255],
];
generateList(humanFoodList, humanMenuList);
