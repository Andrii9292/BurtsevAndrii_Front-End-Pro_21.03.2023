'use strict'
//task1
console.log(Boolean(Number(`10`)) + 1); //будет 2, так как строка преобразуется в число, а число 10 в boolean значении это true а true это 1.
    // И следовательно 1+1 будет 2!
console.log(`sub ` + Number(false)); //будет sub 0, так как Number преобразует значение false в 0,
    // оператор + сложит строку "sub " и число 0 в строку, так как происходит конкатенация строк.
console.log(16  *  `      91    `); //будет 1456, так как оператор * автоматически преобразует строку в число,
    // игнорируя пробелы в начале и конце строки и после результата вычисления 16 * 91 будет 1456.
console.log(true-70); // будет -69, так как true это 1, а 1-70 будет -69!
console.log(Number(1 + String(1)) + 1); // будет число 12, так как 1+строка 1 будет строка 11, number преобразует строку в число 11
    //11+1 будет число 12

//task2
const hours = prompt("Введите количество часов:");
const seconds = hours * 60 * 60;
alert(`В ${hours} часах ${seconds} секунд`);

//task3
let num = 1;    //1
    num += 12;  //1+12=13
    num -= 14;  //13-14=-1
    num *= 5;   //-1*5=-5
    num /= 7;   //-5/7=-0.7142857142857143
    num++;      //-0.7142857142857143+1=0.2857142857142857
    num--;      //0.2857142857142857-1=-0.7142857142857143
alert(num);