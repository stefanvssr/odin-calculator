const digitButtons = document.querySelectorAll(".digits");
const screen = document.querySelector(".screen");
let screenValue = "";

digitButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        screenValue += e.target.value;

        screen.innerHTML = screenValue;
    });
});

function calcAdd(num1, num2) {
    return num1 + num2;
}

function calcSubtract(num1, num2) {
    return num1 - num2;
}

function calcMultiply(num1, num2) {
    return num1 * num2;
}

function calcDivide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === "add") {
        return calcAdd(num1, num2);
    } else if (operator === "subtract") {
        return calcSubtract(num1, num2);
    } else if (operator === "multiply") {
        return calcMultiply(num1, num2);
    } else if (operator === "divide") {
        return calcDivide(num1, num2);
    }

}