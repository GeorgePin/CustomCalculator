import {
  percentage,
  signChanging,
  calculateOneDivideByValue,
} from "../operations/casualOperations";
import {
  calculateValueInPowerOf,
  calculateSquaredValue,
  calculateCubedValue,
  calculateTenInPowerOfValue,
} from "../operations/exponentiation";
import { calculateSquareRootOfValue } from "../operations/squareRoot";
import * as elements from "./elements";
import {
  operations,
  setTemporaryValue,
  setValueInPowerFlag,
  temporaryValue,
} from "./constantsAndVariables";

export function handleOnClickResultButton() {
  if (temporaryValue != null && temporaryValue != "") {
    elements.inputField.value = calculateValueInPowerOf(
      Number(temporaryValue.replace(",", ".")),
      Number(elements.inputField.value.replace(",", "."))
    );
    setTemporaryValue("");
    setValueInPowerFlag(false);
    return;
  }
  for (let i = 0; i < operations.length; i++) {
    if (elements.inputField.value.includes(operations[i].symbol)) {
      let numbers: Array<number> = elements.inputField.value
        .split(operations[i].symbol)
        .map((number) => {
          number = number.replace(",", ".");
          return Number(number);
        });
      elements.inputField.value = operations[i].function(
        numbers[0],
        numbers[1]
      );
      return;
    }
  }
}
export function handleOnClickPercentageButton() {
  elements.inputField.value = percentage(
    Number(elements.inputField.value.replace(",", "."))
  );
}

export function handleOnClickSignChangeButton() {
  elements.inputField.value = signChanging(
    Number(elements.inputField.value.replace(",", "."))
  );
}

export function handleOnClickCalculateSquaredValueButton() {
  elements.inputField.value = calculateSquaredValue(
    Number(elements.inputField.value.replace(",", "."))
  );
}

export function handleOnClickCalculateCubedValueButton() {
  elements.inputField.value = calculateCubedValue(
    Number(elements.inputField.value.replace(",", "."))
  );
}

export function handleOnClickCalculateToAPowerButton() {
  if (temporaryValue == null || temporaryValue == "") {
    setTemporaryValue(elements.inputField.value);
    setValueInPowerFlag(true);
  }
}

export function handleOnClickCalculateTenInPowerOfValueButton() {
  elements.inputField.value = calculateTenInPowerOfValue(
    Number(elements.inputField.value.replace(",", "."))
  );
}

export function handleOnClickCalculateOneDivideByValueButton() {
  elements.inputField.value = calculateOneDivideByValue(
    Number(elements.inputField.value.replace(",", "."))
  );
}

export function handleOnClickCalculateSquareRootOfValueButton() {
  elements.inputField.value = calculateSquareRootOfValue(
    Number(elements.inputField.value.replace(",", "."))
  );
}
