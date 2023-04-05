'use strict'
const operation = prompt(`+, -, *, /`, `+,-,*,/`)
const num1 = +prompt (`введите первое число`);
const num2 = +prompt (`введите второе число`);
let result;
if (operation === `+`) {
    result = num1 + num2
} else if (operation === `-`) {
    result = num1 - num2
} else if (operation === `*`) {
    result = num1 * num2
} else if (operation === `/`) {
    result = num1 / num2
}
alert (`${num1} ${operation} ${num2} = ${result}`);