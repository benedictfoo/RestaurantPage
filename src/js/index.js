import "../css/style.css";
import about from "./about";
import home from "./home";
import menu from "./menu";
home();
document.querySelector(".nav-list").addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("nav-home")) {
    home();
  } else if (target.classList.contains("nav-menu")) {
    menu();
  } else if (target.classList.contains("nav-about")) {
    about();
  }
});
