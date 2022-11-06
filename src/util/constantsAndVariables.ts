import {
  division,
  subtraction,
  product,
  addition,
} from "../operations/casualOperations";

export const PRECISION = 0.00001;

type Operation = {
  symbol: string;
  function: Function;
};

export const operations: Operation[] = [
  { symbol: "÷", function: division },
  { symbol: "-", function: subtraction },
  { symbol: "×", function: product },
  { symbol: "+", function: addition },
];

export let temporaryValue: string;
export let valueInPowerFlag: boolean;

export function setTemporaryValue(temporaryValue: string) {
  this.temporaryValue = temporaryValue;
}

export function setValueInPowerFlag(valueInPowerFlag: boolean) {
  this.valueInPowerFlag = valueInPowerFlag;
}
