let currentValue = "";

function appendToDisplay(value) {
  currentValue += value;
  document.getElementById("result").value = currentValue;
}

function calculateResult() {
  try {
    const result = eval(currentValue);
    document.getElementById("result").value = result;
    currentValue = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function reset() {
  currentValue = "";
  document.getElementById("result").value = "";
}

function calculatePercentage() {
  try {
    const result = eval(currentValue) / 100;
    document.getElementById("result").value = result;
    currentValue = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function togglePlusMinus() {
  currentValue = eval(currentValue) * -1;
  document.getElementById("result").value = currentValue;
}

function calculateSquareRoot() {
  try {
    const result = Math.sqrt(eval(currentValue));
    document.getElementById("result").value = result;
    currentValue = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
