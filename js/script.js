'use strict'
const operation = prompt("Выберите операцию: (add, sub, mult, div)", "add, sub, mult, div");
const num1 = Number(prompt("Введите первое число"));
const num2 = Number(prompt("Введите второе число"));
let result;
if (operation === "add") {
    result = num1 + num2;
} else if (operation === "sub") {
    result = num1 - num2;
} else if (operation === "mult") {
    result = num1 * num2;
} else if (operation === "div") {
    result = num1 / num2;
} else {
    alert("Недопустимая операция");
}
if (result !== undefined) {
    alert(`${num1} ${operation} ${num2} = ${result}`);
}
