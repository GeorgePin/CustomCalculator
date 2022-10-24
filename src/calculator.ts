const clearButton = document.getElementById("ac") as HTMLDivElement | null;
const signChangeButton = document.getElementById(
  "sign-change-button"
) as HTMLDivElement | null;
const resultButton = document.getElementById(
  "result-button"
) as HTMLDivElement | null;
const inputField = document.getElementById(
  "input-field"
) as HTMLInputElement | null;
const percentageButton = document.getElementById(
  "percentage-button"
) as HTMLInputElement | null;
const numbers = document.querySelectorAll<HTMLDivElement>(".number");
const primaryActions =
  document.querySelectorAll<HTMLDivElement>(".primary-action");
const secondaryActions =
  document.querySelectorAll<HTMLDivElement>(".secondary-action");

type Operation = {
  symbol: string;
  function: Function;
};
const operations: Operation[] = [
  { symbol: "÷", function: division },
  { symbol: "-", function: subtraction },
  { symbol: "×", function: product },
  { symbol: "+", function: addition },
];

numbers.forEach(addEventListenerForNumberAndActions);
primaryActions.forEach(addEventListenerForNumberAndActions);
secondaryActions.forEach(addEventListenerForNumberAndActions);
addEventListenerForClearBtn(clearButton);
addEventListenerForResultBtn(resultButton);
addEventListenerForInputField(inputField);
addEventListenerForPercentageButton(percentageButton);
addEventListenerForSignChangeButton(signChangeButton);

function addEventListenerForNumberAndActions(number: HTMLDivElement) {
  number.addEventListener("click", (event) => {
    event.preventDefault();
    inputField.value += number.innerText;
    clearButton.innerText = "C";
  });
}
function addEventListenerForClearBtn(clearButton: HTMLDivElement) {
  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    inputField.value = "";
    clearButton.innerText = "AC";
  });
}

function addEventListenerForResultBtn(resultButton: HTMLDivElement) {
  resultButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickResultButton();
  });
}
function handleOnClickResultButton() {
  for (let i = 0; i < operations.length; i++) {
    if (inputField.value.includes(operations[i].symbol)) {
      let numbers: Array<number> = inputField.value
        .split(operations[i].symbol)
        .map((number) => {
          number = number.replace(",", ".");
          return Number(number);
        });
      inputField.value = operations[i].function(numbers[0], numbers[1]);
      return;
    }
  }
}
function addEventListenerForInputField(inputField: HTMLInputElement) {
  inputField.addEventListener("input", (event) => {
    event.preventDefault();
    if (inputField.value == null || inputField.value == "") {
      clearButton.innerText = "AC";
    } else {
      clearButton.innerText = "C";
    }
  });
}

function addEventListenerForPercentageButton(
  percentageField: HTMLInputElement
) {
  percentageField.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickPercentageButton();
  });
}

function handleOnClickPercentageButton() {
  inputField.value = percentage(Number(inputField.value.replace(",", ".")));
}
function addEventListenerForSignChangeButton(
  signChangeButton: HTMLInputElement
) {
  signChangeButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickSignChangeButton();
  });
}
function handleOnClickSignChangeButton() {
  inputField.value = signChanging(Number(inputField.value.replace(",", ".")));
}

function division(firstNumber: number, secondNumber: number) {
  return (firstNumber / secondNumber).toString();
}
function subtraction(firstNumber: number, secondNumber: number) {
  return (firstNumber - secondNumber).toString();
}
function product(firstNumber: number, secondNumber: number) {
  return (firstNumber * secondNumber).toString();
}
function addition(firstNumber: number, secondNumber: number) {
  return (firstNumber + secondNumber).toString();
}
function percentage(firstNumber: number) {
  return (firstNumber / 100).toString();
}
function signChanging(firstNumber: number) {
  return (-firstNumber).toString();
}

export default {};
