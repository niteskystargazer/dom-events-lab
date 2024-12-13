/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');


/*-------------------------------- Variables --------------------------------*/
let currentInput = "";
let previousInput = "";
let operator = "";


/*------------------------ Cached Element References ------------------------*/




/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const buttonText = event.target.innerText;
  
      if (!isNaN(buttonText) || buttonText === ".") {
        handleNumber(buttonText);
      } else if (buttonText === "C") {
        clearDisplay();
      } else if (buttonText === "=") {
        calculateResult();
      } else {
        handleOperator(buttonText);
      }
    });
  });
  
  
  
  

    

/*-------------------------------- Functions --------------------------------*/
function handleNumber(num) {
    currentInput += num; // Append number to the current input
    updateDisplay(currentInput);
  }
  
  
  function handleOperator(op) {
    if (currentInput === "") return; 
    if (previousInput && operator) {
      calculateResult();
    }
    operator = op; 
    previousInput = currentInput; 
    currentInput = ""; 
  }
  
 
  function calculateResult() {
    if (!previousInput || !currentInput || !operator) return; // Ensure all parts are present
  
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return;
    }
  
    updateDisplay(result);
    previousInput = result.toString(); 
    currentInput = "";
    operator = "";
  }
  
  
  function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay(0);
  }
  
 
  function updateDisplay(value) {
    display.textContent = value;
  }