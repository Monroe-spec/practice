//function additionFunction(parameter1, parameter2) {
//              code here
//    return parameter1 + parameter2;
//}
let sum = '';
let input = document.getElementById("display");

function getValue() {
    return parseFloat(document.getElementById("display").value);
}

function keyPress(val) {
    input.value += val;
}

function calculate() {
    const num = getValue();
    switch (operator) {
      case "+":
        sum += num;
        break;
      case "-":
        sum -= num;
        break;
      case "*":
        sum *= num;
        break;
      case "/":
        sum /= num;
        break;
    }
    console.log(sum);
}

function clear() {
    input.value = "";
}

function add() {
    const num = getValue();
    value += num;
    setValue();
}

function sub() {
    const num = getValue();
    value -= num;
    setValue();
}

function mult() {
    const num = getValue();
    value *= num;
    setValue();
}

function div() {
    const num = getValue();
    value /= num;
    setValue();
}

setValue();