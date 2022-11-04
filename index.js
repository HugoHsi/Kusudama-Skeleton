// Declaring Variables
let container = document.querySelector('.container');
let buttonContainer = document.querySelector('.button-container')
let i = 0;
let intro;
let back;
let next;

let introText = [
  "A Kusudama is an origami model comprised of multiple identical pieces.",
  "These pieces slot into each other in the form of flaps and pockets.",
  "Assembly of these models almost always comprises of creating pyramids comprised of 3 pieces, followed by combining 5 of these pyramids into a 5 pointed star shape.",
  "This pattern of 3 pieces followed by 5 intrigued me, leading to the creation of this site.",
  "This site serves as an exploration into the underlying geometry of these Kusudamas",
];

// Creating Title
let title = document.createElement("div");
title.classList.add("title");
title.textContent = "Kusudama";
title.addEventListener("click", () => {
  title.classList.add('fade');
  setTimeout(() => {title.remove()}, 300);
  createBackButton();
  createNextButton();
  showIntro();
  });
container.append(title);

function showIntro() {
  if (i <= 4) {
    intro = document.createElement('p');
    intro.classList.add('intro');
    intro.textContent = introText[i];
    container.insertBefore(intro, buttonContainer);
  } else {
    window.location.href = "./selection.html";
  }
}

function removeIntro() {
  intro.classList.add('fade');
  setTimeout(() => {intro.remove()}, 300);
}

function createBackButton() {
  back = document.createElement('button');
  back.classList.add('button');
  back.textContent = 'back';
  back.addEventListener('click', () => {
    removeIntro();
    i--;
    setTimeout(() => {showIntro()}, 301);
  })
  buttonContainer.append(back);
}

function createNextButton() {
  next = document.createElement('button');
  next.classList.add('button');
  next.textContent = 'next';
  next.addEventListener('click', () => {
    removeIntro();
    i++;
    setTimeout(() => {showIntro()}, 301);
  })
  buttonContainer.append(next);
}

