import { customMathSqrt } from "./squareRoot";

export function customMathPow(base: number, power: number) {
  const isPowerInteger = Number.isInteger(power);
  let transformedPower;
  let denominator;
  if (!isPowerInteger) {
    const symbolsAfterDot = power.toString().split(".")[1].split("").length;
    denominator = 10 * symbolsAfterDot;
    transformedPower = power * denominator;
  } else {
    transformedPower = power;
  }
  let summary = 1;
  for (let i = 0; i < transformedPower; i++) {
    summary = summary * base;
  }
  summary = customMathSqrt(summary, denominator, summary / transformedPower);
  return summary;
}
export function calculateSquaredValue(firstNumber: number) {
  return customMathPow(firstNumber, 2).toString();
}
export function calculateCubedValue(firstNumber: number) {
  return customMathPow(firstNumber, 3).toString();
}
export function calculateValueInPowerOf(
  firstNumber: number,
  secondNumber: number
) {
  return customMathPow(firstNumber, secondNumber).toString();
}
export function calculateTenInPowerOfValue(firstNumber: number) {
  return customMathPow(10, firstNumber).toString();
}
