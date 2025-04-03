function about() {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = "";
  const heading = document.createElement("h1");
  heading.textContent = "About Us";
  contentElement.appendChild(heading);
  const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam asperiores beatae accusantium ducimus suscipit tenetur aliquam quis aut corrupti debitis!",
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eligendi, temporibus mollitia repellendus non excepturi? Error incidunt hic corporis. Quidem eaque laboriosam sint! Fugit odio voluptas incidunt. In, doloremque cum?",
  ];
  paragraphs.forEach((paragraph) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.style.lineHeight = 2;
    paragraphElement.style.marginBottom = "2rem";

    paragraphElement.textContent = paragraph;
    contentElement.appendChild(paragraphElement);
  });
}
export default about;
