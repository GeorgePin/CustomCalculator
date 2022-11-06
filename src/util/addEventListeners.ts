import * as elements from "./elements";
import * as eventListeners from "./eventListeners";

elements.numbers.forEach(eventListeners.addEventListenerForNumberAndActions);
elements.primaryActions.forEach(
  eventListeners.addEventListenerForNumberAndActions
);
elements.secondaryActions.forEach(
  eventListeners.addEventListenerForNumberAndActions
);
eventListeners.addEventListenerForClearBtn(elements.clearButton);
eventListeners.addEventListenerForResultBtn(elements.resultButton);
eventListeners.addEventListenerForInputField(elements.inputField);
eventListeners.addEventListenerForPercentageButton(elements.percentageButton);
eventListeners.addEventListenerForSignChangeButton(elements.signChangeButton);
eventListeners.addEventListenerForCalculateSquaredValueButton(
  elements.calculateSquaredValueButton
);
eventListeners.addEventListenerForCalculateCubedValueButton(
  elements.calculateCubedValueButton
);
eventListeners.addEventListenerForCalculateToAPowerButton(
  elements.calculateToAPowerButton
);
eventListeners.addEventListenerForCalculateTenInPowerOfValueButton(
  elements.calculateTenInPowerOfValueButton
);
eventListeners.addEventListenerForCalculateOneDivideByValueButton(
  elements.calculateOneDivideByValueButton
);
eventListeners.addEventListenerForCalculateSquareRootOfValueButton(
  elements.calculateSquareRootOfValueButton
);
