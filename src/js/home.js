import HomeBackground from "../img/home-background.jpg";
import "../css/home.css";
const contentElement = document.querySelector("#content");
const imgElement = document.createElement("img");
imgElement.classList.add("home-img");
imgElement.src = HomeBackground;
contentElement.appendChild(imgElement);
const attributionElement = document.createElement("a");
attributionElement.textContent = "http://www.freepik.com/";
contentElement.appendChild(attributionElement);
attributionElement.classList.add("home-img-attribution");
const introParagraph = document.createElement("p");
introParagraph.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic illo quo alias tenetur earum excepturi voluptas nemo voluptates reiciendis atque corrupti ipsa ea sequi.";
contentElement.appendChild(introParagraph);
introParagraph.classList.add("intro-paragraph");
const secondIntroParagraph = document.createElement("p");
secondIntroParagraph.classList.add("intro-paragraph");
secondIntroParagraph.textContent =
  "Come visit us! Dolor sit amet consectetur adipisicing elit. Nihil hic illo quo alias tenetur earum.";
contentElement.appendChild(secondIntroParagraph);
