'use strict'
const num1 = +prompt (`введите первое число`);
const num2 = +prompt (`введите второе число`);
const action = prompt(`+, -, *, /`, `+,-,*,/`)
let result;
    if (`+`)
        return num1 + num2
    else if (`-`)
        return num1 - num2
    else if (`*`)
        return num1 * num2
    else if (`/`)
        return num1 / num2
alert (`${num1} ${action} ${num2} = ${result}`);