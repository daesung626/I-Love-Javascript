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

/***********
 * Destructuring arrays
 */

// const arr = [2, 3, 4,];

// const [x, y, z] = arr;
// console.log(x, y, z)

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;

// console.log(i, j);
// console.log(nested);

/***********
 * Destructuring objects
 */

// let a = 123;
// let b = 456;
// const obj = { a: 23, b: 7, c: 90 };

// console.log(a, b);
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects

/***************
 * Spread operator
 */

// const arr = [7, 8, 9];
// const newArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(newArr);

// const newArr2 = [1, 2, ...arr];
// console.log(newArr2);

// Iterables: arrays, strings, maps, sets. NOT OBJECTS

// const str = 'Daesung';
// const letters = [...str, ' ', 'C'];
// console.log(letters);
// console.log(...str);

/************
 * Rest patterns
 */

// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// }

// add(5, 2, 6, 9, 5, 2);

// const x = [23, 5, 7];
// add(...x);

/*****************
 * Short circuiting
 */

// console.log(0 || 23 || 'Hello');
// console.log(0 && 23 && 'Hello');

/**********
 * Optional chaining
 */

// const users = [
//     {
//         name: 'Daesung',
//         email: 'daesungchoi626@gmail.com',
//         age: 23
//     }
// ]

// console.log(users[0]?.name ?? 'User array empty');

/*************
 * Coding challenge 9.2
 */

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
*/

/*
// 1.
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/**************
 * Sets
 */

// const orderSet = new Set(['Pasta', 'Pizza', 'Raviolli', 'Cheese', 'Pizza', 'Pizza', 'Pasta']);

// console.log(orderSet);

// console.log(orderSet.has('Pasta'));
// console.log(orderSet.has('Bread'));

// orderSet.add('Garlic Bread');
// console.log(orderSet);

// orderSet.delete('Cheese');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// Example

// const staff = ['Waiter', 'Chef', 'Chef', 'Waiter', 'Chef', 'Manager'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

/*************
 * Maps
 */

// const rest = new Map();

// rest.set('name', 'Olive Garden');
// rest.set(1, 'Irvine');
// rest.set(2, 'Los Angeles');

// console.log(rest);

// console.log(rest.get('name'));

/************
 * What data structure do i use?
 */

/*
Arrays : Whenever you need to store values in order (might contain duplicates) and when you need to manipulate data

Sets : When you need to work with UNIQUE values and to remove duplicates
*/

/*
Objects : When you need to include functions (methods) and when working with JSON

Maps : When you need a key and value.
*/

/***********
 * Coding challenge 9.3
 */

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
     [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// for (const [min, event] of gameEvents) {
//     const half = min <= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${min}: ${event}`);
// }

/**************
 * Strings
 */

// const airline = 'Korean Air';
// console.log(airline.slice(7, 9));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(-3));

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') {
//         console.log('You got middle seat')
//     } else {
//         console.log('Not middle')
//     }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('11A');
// checkMiddleSeat('11E');

// Comparing

// const email = 'daesungchoi626@gmail.com';
// const loginEmail = ' DaesungChoi626@gmail.com \n';

// const fixedEmail = loginEmail.toLowerCase().trim();
// console.log(fixedEmail);
// console.log(fixedEmail === email);

// Split and joint

// console.log('Daesung Choi'.split(' '));
// const [firstName, lastName] = 'Daesung Choi'.split(' ');
// console.log(lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// Padding

// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+'));

// const maskCreditCard = function (number) {
//     const str = number.toString();
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(43825));
// console.log(maskCreditCard(4214093825));
// console.log(maskCreditCard(3240309854290384));

/***************
 * Functions
 */

// const bookings = []

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);

/***************
 * First-class and higher-order functions
 */

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function (str, fn) {
//     console.log(`Original string ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

/************
 * Functions returning functions
 */

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');

// greeterHey('Jonas');
// greeterHey('Daesung Choi');

// const koreanAir = {
//     airline: 'Korean Air',
//     iataCode: 'KA',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//     }
// }

// koreanAir.book(249, 'Daesung Choi');
// console.log(koreanAir);

// const asiana = {
//     name: 'Asiana',
//     iataCode: 'AS',
//     bookings: [],

// }

// const book = koreanAir.book;

// book.call(asiana, 23, 'Daesung Choi');
// console.log(asiana);

/**************
 * Closures
 */

// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     }
// }

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     }
// }

// g();
// f();

// // Re-assign
// h();
// f();

/************
 * For each
 */

// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
//     }
// })

// Map
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pund sterling'],
// ])

// currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// })

/*************
 * Dates
 */

// const now = new Date();
// console.log(now);

/************
 * Timers
 */

// const ingredients = ['pinapples', 'sausages'];
// const pizzaTimer = setTimeout(
//   (one, two) => console.log(`Here is your pizza with ${one} and ${two}`),
//   3000,
//   ...ingredients
// );
// console.log('Waiting...');

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

/***********************************
 * OOP
 */

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// 1. New {} is created
// 2. Funtionn is called, this = {}
// 3. {} linked to prototype
// 4. Funtion automatically return {}
// const daesung = new Person('Daesung', 1997);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// daesung.calcAge();

// Getter and setters

// const account = {
//   owner: 'Daesung',
//   transactions: [100, 150, 80, 25],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// connsole.log(account.movements);

/*******************
 * Challenge 14.3
 */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// Overrides the parent accelerate
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
// };

// EV.prototype.chargeBat = function (chargeTo) {
//   this.charge = chargeTo;
// };

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log('Introduce');
//   }
// }

// const daesung = new StudentCl('Daesung Choi', 1997, 'Computer Science');

// Classes

class Account {
  // Public fields
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    // console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public methods
  // Public interface
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this['__#32371@#approveLoan'](val)) {
      this.deposit(val);
      // console.log('Loan approved');
    }
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Daesung', 'USD', 1111);

// Chaining

acc1.deposit(300).withdraw(500).withdraw(100).deposit(2400);

/*******************
 * Async Js
 */

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

// Using arrow functions
// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => console.log(data));
// };

// Chaining
// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       const neighbor = data[0].borders[0];

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => console.log(data));
// };

// getCountryData('portugal');

// Error handling and finally

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       const neighbor = data[0].borders[0];

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => {
//       console.log('Finally');
//     });
// };

// getCountryData('usa');

// Challenge 16.1

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => console.log(`You are in ${data.region}, ${data.country}.`))
//     .catch(err => console.error(err));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/************
 * Promises
 */

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Drawing...');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win');
//     } else {
//       reject(new Error('You lost'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('Waited 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('Waited 1 second'));

//

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// Challenge 16.2

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImg = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImg()
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     current.style.display = 'none';
//     return createImg();
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

/*************
 * Async Await
 */

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function (country) {
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json();

//   const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
//   const data = await res.json();
// };

/**********
 * Promises in parallel
 */

// Promise.all();

// Challenge 16.3

const loadNPause = async function () {
  try {
    let img = await createImage();
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await createImage();
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
  } catch (err) {
    console.log(err);
  }
};
