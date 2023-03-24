let operand1 = +prompt('Введите первое число:');
let operand2 = +prompt('Введите второе число:');
function add(a, b) {
    let result = a + b;
    console.log(`Результат: ${a} + ${b} = ${result}`);
}
add(operand1, operand2);
function subtract(a, b) {
    let result = a - b;
    console.log(`Результат: ${a} - ${b} = ${result}`);
}
subtract(operand1, operand2);
function multiply(a, b) {
    let result = a * b;
    console.log(`Результат: ${a} * ${b} = ${result}`);
}
multiply(operand1, operand2);
function divide(a, b) {
    let result = a / b;
    console.log(`Результат: ${a} / ${b} = ${result}`);
}
divide(operand1, operand2);