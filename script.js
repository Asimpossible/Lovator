const namesForm = document.querySelector("form");
const submitButton = document.querySelector("button");
const result = document.querySelector(".result");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");

function loveCalculation() {
  let n = Math.random();
  n = Math.floor(n * 100 + 1);
  return n;
}

function calculatingResult(event) {
  event.preventDefault();
  result.textContent = loveCalculation() + "%";
  submitButton.disabled = true;
}

namesForm.addEventListener("input", () => {
  submitButton.disabled = !(input1.value.trim() && input2.value.trim());
});
