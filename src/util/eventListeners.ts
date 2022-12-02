import * as elements from "./elements";
import {
  setTemporaryValue,
  setValueInPowerFlag,
  temporaryValue,
  valueInPowerFlag,
} from "./constantsAndVariables";
import {
  handleOnClickCalculateCubedValueButton,
  handleOnClickCalculateOneDivideByValueButton,
  handleOnClickCalculateSquaredValueButton,
  handleOnClickCalculateSquareRootOfValueButton,
  handleOnClickCalculateTenInPowerOfValueButton,
  handleOnClickCalculateToAPowerButton,
  handleOnClickPercentageButton,
  handleOnClickResultButton,
  handleOnClickSignChangeButton,
} from "./eventListenersHandlers";

export function addEventListenerForNumberAndActions(number: HTMLDivElement) {
  number.addEventListener("click", (event) => {
    event.preventDefault();
    elements.clearButton.innerText = "C";
    if (temporaryValue != null && temporaryValue != "" && valueInPowerFlag) {
      elements.inputField.value = number.innerText;
      setValueInPowerFlag(false);
    } else {
      elements.inputField.value += number.innerText;
    }
  });
}
export function addEventListenerForClearBtn(clearButton: HTMLDivElement) {
  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    elements.inputField.value = "";
    setTemporaryValue("");
    setValueInPowerFlag(false);
    clearButton.innerText = "AC";
  });
}

export function addEventListenerForResultBtn(resultButton: HTMLDivElement) {
  resultButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickResultButton();
  });
}

export function addEventListenerForInputField(inputField: HTMLInputElement) {
  inputField.addEventListener("input", (event) => {
    event.preventDefault();
    if (inputField.value == null || inputField.value == "") {
      elements.clearButton.innerText = "AC";
    } else {
      elements.clearButton.innerText = "C";
    }
  });
}

export function addEventListenerForPercentageButton(
  percentageField: HTMLInputElement
) {
  percentageField.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickPercentageButton();
  });
}

export function addEventListenerForSignChangeButton(
  signChangeButton: HTMLDivElement
) {
  signChangeButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickSignChangeButton();
  });
}
export function addEventListenerForCalculateSquaredValueButton(
  calculateSquaredValueButton: HTMLDivElement
) {
  calculateSquaredValueButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickCalculateSquaredValueButton();
  });
}
export function addEventListenerForCalculateCubedValueButton(
  calculateCubedValueButton: HTMLDivElement
) {
  calculateCubedValueButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickCalculateCubedValueButton();
  });
}
export function addEventListenerForCalculateToAPowerButton(
  calculateToAPowerButton: HTMLDivElement
) {
  calculateToAPowerButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickCalculateToAPowerButton();
  });
}

export function addEventListenerForCalculateTenInPowerOfValueButton(
  calculateTenInPowerOfValueButton: HTMLDivElement
) {
  calculateTenInPowerOfValueButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickCalculateTenInPowerOfValueButton();
  });
}
export function addEventListenerForCalculateOneDivideByValueButton(
  calculateOneDivideByValueButton: HTMLDivElement
) {
  calculateOneDivideByValueButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickCalculateOneDivideByValueButton();
  });
}
export function addEventListenerForCalculateSquareRootOfValueButton(
  calculateSquareRootOfValueButton: HTMLDivElement
) {
  calculateSquareRootOfValueButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleOnClickCalculateSquareRootOfValueButton();
  });
}
