

document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    console.dir(display)
    let firstOperand = ""; // Stores the first number
    let secondOperand = ""; // Stores the second number
    let currentOperator = ""; // Stores the selected operator
    let isSecondOperand = false; // Tracks whether we are inputting the second number
  
    const buttons = document.querySelectorAll(".button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.textContent;
  
        // Clear button functionality
        if (value === "C") {
          firstOperand = "";
          secondOperand = "";
          currentOperator = "";
          isSecondOperand = false;
          display.textContent = "0";
          return;
        }
  
        // Equals button functionality
        if (value === "=") {
          if (firstOperand && secondOperand && currentOperator) {
            const result = calculate(
              parseFloat(firstOperand),
              parseFloat(secondOperand),
              currentOperator
            );
            display.textContent = result;
            firstOperand = result.toString();
            secondOperand = "";
            currentOperator = "";
            isSecondOperand = false;
          }
          return;
        }
  
        // Operator functionality
        if (button.classList.contains("operator") && value !== "=") {
          if (firstOperand) {
            currentOperator = value;
            isSecondOperand = true;
          }
          return;
        }
  
        // Number functionality
        if (button.classList.contains("number")) {
          if (isSecondOperand) {
            secondOperand += value;
            display.textContent = secondOperand;
          } else {
            firstOperand += value;
            display.textContent = firstOperand;
          }
        }
      });
    });
  
    // Function to perform calculations
    function calculate(num1, num2, operator) {
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num2 !== 0 ? num1 / num2 : "Error"; // Avoid division by zero
        default:
          return 0;
      }
    }
  });
  
