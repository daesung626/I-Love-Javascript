// console.log('Hello World')

// firstName = 'Daesung';
// age = 23;
// job = 'student';

// alert(firstName + ' is a ' + job);

// var lastName = prompt(`What is Daesung's last name?`);
// console.log(firstName + ' ' + lastName);

/***********************
 * TERNARY OPERATOR
 */

// var firstName = 'Daesung';
// var age = 23;

// age >= 21 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 21 ? 'beer' : 'juice';
// console.log(drink);

/***********************
 * SWITCH STATEMENT
 */

// var job = 'gambler';
// switch (job) {
//     case 'student':
//         console.log(firstName + ' teaches.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives.');
//         break;
//     case 'gambler':
//         console.log(firstName + ' is an idiot.');
//         break;
//     default:
//         console.log('This is default');
// }

/***********************
 * EQUALITY COERCION
 */

// var num = 21;

// if (num == '21') {
//     console.log('==')
// }
// if (num === 21) {
//     console.log('===')
// }

/***********************
 * ARRAYS
 */

// var newArr = [1, 2, 3, 4];

// newArr.push(5);
// newArr.pop();
// newArr.unshift(0);
// newArr.shift();


// console.log(newArr);

/***********************
 * OBJECTS AND PROPERTIES
 */

// var person = {
//     firstName: 'Daesung',
//     lastName: 'Choi',
//     birthYear: 1997,
//     family: ['A', 'B', 'C', 'D'],
//     job: 'developer',
//     isMarried: false
// };

// console.log(person.firstName);
// console.log(person['lastName']);

/***********************
 * OBJECTS AND METHODS
 */

// var person = {
//     firstName: 'Daesung',
//     lastName: 'Choi',
//     birthYear: 1997,
//     family: ['A', 'B', 'C', 'D'],
//     job: 'developer',
//     isMarried: false,
//     calcAge: function () {
//         this.age = 2020 - this.birthYear;
//     }
// };

// person.calcAge();
// console.log(person);

/***********************
 * CODING CHALLENGE 4
 */

// var john = {
//     fullName: 'John Smith',
//     mass: 70,
//     height: 1.95,
//     calcBmi: function () {
//         this.bmi = (this.mass / (this.height * this.height));
//         return this.bmi;
//     }
// }

// var mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBmi: function () {
//         this.bmi = (this.mass / (this.height * this.height));
//         return this.bmi;
//     }
// }

// if (john.calcBmi() > mark.calcBmi()) {
//     console.log(john.fullName);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName);
// } else {
//     console.log('Same');
// }

/***********************
 * CONTINUE AND BREAK
 */

// var person = ['Daesung', 'Choi', 1997, 'developer', false, 'blue'];

// for (var i = 0; i < person.length; i++) {
//     if (typeof person[i] !== 'string') continue;
//     console.log(person[i]);
// }

// for (var i = 0; i < person.length; i++) {
//     if (typeof person[i] !== 'string') break;
//     console.log(person[i]);
// }

/***********************
 * CODING CHALLENGE 5.1
 */

// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function () {
//         this.tips = [];
//         this.finalValues = [];

//         for (var i = 0; i < this.bills.length; i++) {
//             var percentage;
//             var bill = this.bills[i];

//             if (bill < 50) {
//                 percentage = 0.2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = 0.15;
//             } else {
//                 percentage = 0.1;
//             }

//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }
/***********************
 * CODING CHALLENGE 5.2
 */

// var mark = {
//     fullName: 'Mark Miller',
//     bills: [77, 475, 110, 45],
//     calcTips: function () {
//         this.tips = [];
//         this.finalValues = [];

//         for (var i = 0; i < this.bills.length; i++) {
//             var percentage;
//             var bill = this.bills[i];

//             if (bill < 100) {
//                 percentage = 0.2;
//             } else if (bill >= 100 && bill < 300) {
//                 percentage = 0.1;
//             } else {
//                 percentage = 0.25;
//             }

//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }

// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }

// john.calcTips();
// mark.calcTips();

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);
// console.log(john, mark);

// if (john.average > mark.average) {
//     console.log(john.fullName)
// } else (console.log(mark.fullName));

/***********************
 * HOISTING
 */

// calcAge(1997);
// function calcAge(year) {
//     console.log(2020 - year);
// }

// var retire = function (year) {
//     console.log(65 - (2020 - year));
// }
// retire(1997)

// var age = 23;

// function foo() {
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);

/***********************
 * THIS
 */

// calcAge(1997)

// function calcAge(year) {
//     console.log(2020 - year);
//     console.log(this)
// }

// var john = {
//     name: 'Daesung',
//     yob: 1997,
//     calcAge: function () {
//         console.log(this);
//         console.log(2020 - this.yob);

//         function innerFunction() {
//             console.log(this);
//         }
//         innerFunction();
//     }
// }

// john.calcAge();

// var mike = {
//     name: 'Mike',
//     yob: 1967
// };

// mike.calcAge = john.calcAge;
// mike.calcAge();