let shirtButton = document.querySelector("#shirts");
let shirtDesigns = document.querySelector(".shirtDesigns li");
let clickCounter1 = 0;

shirtButton.addEventListener("click", (event) => {
  clickCounter1++;
  if (clickCounter1 == 1) {
    shirtDesigns.classList.remove("hidden");
  }
  if (clickCounter1 == 2) {
    shirtDesigns.classList.add("hidden");
    clickCounter1 = 0;
  }
});
