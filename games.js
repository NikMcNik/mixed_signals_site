let guessButton = document.querySelector("#guessingGames");
let guessGameInfo = document.querySelector(".gameInfo li");
let clickCounter1 = 0;
let clickCounter2 = 0;
let clickCounter3 = 0;
let sceneButton = document.querySelector("#sceneGames");
let sceneGameInfo = document.querySelector(".sceneGameInfo li");
let gimickyButton = document.querySelector("#gimickyGames");
let gimickyGameInfo = document.querySelector(".gimickyGameInfo li");

guessButton.addEventListener("click", (event) => {
  clickCounter1++;
  if (clickCounter1 == 1) {
    guessGameInfo.classList.remove("hidden");
  }
  if (clickCounter1 == 2) {
    guessGameInfo.classList.add("hidden");
    clickCounter1 = 0;
  }
});

sceneButton.addEventListener("click", (event) => {
  clickCounter2++;
  if (clickCounter2 == 1) {
    sceneGameInfo.classList.remove("sceneHidden");
  }
  if (clickCounter2 == 2) {
    sceneGameInfo.classList.add("sceneHidden");
    clickCounter2 = 0;
  }
});

gimickyButton.addEventListener("click", (event) => {
  clickCounter3++;
  if (clickCounter3 == 1) {
    gimickyGameInfo.classList.remove("gimickyHidden");
  }
  if (clickCounter3 == 2) {
    gimickyGameInfo.classList.add("gimickyHidden");
    clickCounter3 = 0;
  }
});
