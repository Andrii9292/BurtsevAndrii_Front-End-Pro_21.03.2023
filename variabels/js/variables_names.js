(() => {
// Имена переменных


// При именовании переменных нам нужно придерживаться определенных правил:

// 1. Имя переменной должно содержать только буквы, цифры или символы $ и _.

let user = 'John';
let $user = 'Alice';
let _user = 'Pete';
let user2 = 'Antony';
let u2s3e4r = 'Alex';       // Так лучше не делать, но это будет работать


// 2. Первый символ в имени не должен быть цифрой.

// let 10user = 'Nick';     // Ошибка!


/*
  3. Имена переменных должны быть написаны на латинице.
     Вы конечно можете называть переменные на кириллице, а также на любом другом языке
     кроме английского, но это считается плохой практикой.
 */

let mentor = 'John Doe';            // Good
let ментор  = 'Alice Cooper';       // Bad


// 4. Имя переменной должно отражать смысл того что она хранит.

let age = 20;
let color = 'red';
let sum = 10 + 10;
let salary = '0$';


// Как быть если имя переменной должно состоять из нескольких слов ?
// На самом деле у есть много стилей именования переменных
// Например:

let snake_case = 'Слов пишутся без пробелов, вместо пробела используется символ _';
let PascalCase = 'Слова пишутся без пробелов и все с большой буквы';
let camelCase = 'Слова пишутся без пробелов, начиная со второго слова все пишутся с большой буквы';

// let kebab-case = 'Слов пишутся без пробелов, вместо пробела используется символ -';

// В JS вызывает ошибки так как символ '-' не разрешен для использования в
// именах переменных, также kebab-case еще называю шашлычным регистром.

// При написании кода на JavaScript мы в основном используем camelCase,

let userAge = 20;

let userFirstName = 'John';
let userLastName = 'Doe';
let userFullName = userFirstName + ' ' + userLastName;

let userSuperLongVariableName = 'Value';


// Константы

// Все вышеперечисленное прекрасно подходи и для именования констант.
// Но также, иногда, для трудно запоминаемых значений которые известны еще до начала
// выполнения скрипта, константы именуют в верхнем регистре используя snake_case.

const API_URL = 'https://api.url/posts';
const DATABASE_NAME = 'junjun_db';
const COLOR_WHITE = '#ffffff';
const COLOR_BLACK = '#000000';


})()