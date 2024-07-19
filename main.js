const plus = () => {
  const number = document.getElementById("number");
  number.innerHTML = Number(number.innerHTML) + 1;
};

const minus = () => {
  const number = document.getElementById("number");
  if (Number(number.innerHTML) > 1) {
    number.innerHTML = Number(number.innerHTML) - 1;
  }
};

const generate = () => {
  const number = document.getElementById("number");
  const randomNumber = Math.floor(Math.random() * Number(number.innerHTML)) + 1;
  alert(`the random number is : ${randomNumber}`);
};

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const generateButton = document.getElementById("generate");

plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);
generateButton.addEventListener("click", generate);
