'use strict'
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
//task2
const user_2 = {
    name: 'John'
};
user_2.name = 'Pete'; // допустимо
//task3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
function add () {
    return Number(salaries.John + salaries.Ann + salaries.Pete)
};
const sum = add ();
console.log(sum); // 390