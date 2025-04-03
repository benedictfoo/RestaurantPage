import "../css/menu.css";
const contentElement = document.querySelector("#content");
contentElement.innerHTML = "";
const menusElement = document.createElement("div");
const menusHeadingElement = document.createElement("h1");
menusHeadingElement.textContent = "Our food";
menusElement.appendChild(menusHeadingElement);
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
  ["all day breakfast", 350],
  ["oats and fruits", 100],
  ["caesar salad", 200],
];
generateList(humanFoodList, humanMenuList);
