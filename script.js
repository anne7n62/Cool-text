"use strict";

let splittetText;

window.addEventListener("load", init);

function init() {
  console.log("init");
  // get the text
  let text = document.querySelector("#cooltext");

  //making an array by splitting every part of the textcontent in #cooltext
  splittetText = text.textContent.split("");
  console.log(splittetText);

  // clear the HTML area, so I can put new content in
  text.textContent = "";

  //add animation for each letter
  splittetText.forEach((letter, index) => {
    const textToAnimate = document.createElement("span"); //adding a span to each element
    textToAnimate.classList.add("textwave"); //adding the animation
    textToAnimate.style.setProperty("--delay", index); //css property
    if (letter === " ") {
      textToAnimate.innerHTML = "&nbsp;";
    } else {
      textToAnimate.textContent = letter;
    }

    text.append(textToAnimate);
  });
}
