import { PRECISION } from "../util/constantsAndVariables";
import { customMathPow } from "./exponentiation";

let startValue = 1;
export function customMathSqrt(
  base: number,
  power: number,
  mid: number
): number {
  let summary = 1;
  for (let i = 0; i < power; i++) {
    summary = summary * mid;
  }
  let positiveValue =
    summary - base < 0 ? (summary - base) * -1 : summary - base;
  if (positiveValue <= PRECISION) {
    console.log(mid);
    return mid;
  } else if (summary > base) {
    startValue -= startValue * (1 / 15);
    mid = mid - mid * startValue;
    return customMathSqrt(base, power, mid);
  } else if (summary < base) {
    startValue -= startValue * (1 / 15);
    mid = mid + mid * startValue;
    return customMathSqrt(base, power, mid);
  }
}

export function calculateSquareRootOfValue(firstNumber: number) {
  return customMathPow(firstNumber, 0.5).toString();
}
