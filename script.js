const buttonBlok = document.querySelector(".buttonBlok");
const buttonUnBlok = document.querySelector(".buttonUnBlok");
const input = document.querySelector(".input");
const text = document.querySelectorAll(".text");
const buttonChangeTxt = document.querySelector(".buttonChangeTxt");

buttonBlok.addEventListener("click", blockInput);
buttonUnBlok.addEventListener("click", unblockInput);
buttonChangeTxt.addEventListener("click", changeTxt);

function blockInput(event) {
  input.setAttribute("disabled", "disabled");
}

function unblockInput(event) {
  input.removeAttribute("disabled", "disabled");
}

function changeTxt(event) {
  for (let i = 0; i < text.length; i++) {
    text[i].textContent = i;
  }
  buttonChangeTxt.removeEventListener("click", changeTxt);
}
