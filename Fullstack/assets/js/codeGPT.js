// write a function with parameters of firstname and lastName
/* const name = 'Wisdom';

let calculate = name + 10;
console.log(calculate); */

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const numberDate = date.getDate();
const year = date.getFullYear();
console.log(days[day], months[month], numberDate + 'th', year);

/* console.log(months[month]);
months.forEach((month1, month2, month3) => {
  //   console.log(month3);
}); */

const arrayOne = ['Wisdom'];

const arrayTwo = ['Munachi'];

const arrayThree = [...arrayOne, ...arrayTwo];

console.log(arrayThree);

for (let i = 0; i < months.length; i++) {
  console.log(months[i].toUpperCase());
}

function calculate_1(utilityBills, groceries, beverages) {
  let number = 1000;
  beverages += number;
  groceries += number;
  utilityBills += number;
  // let utilityBills = 0;

  return [utilityBills, groceries, beverages];
}

const cal = calculate_1(2000, 3000, 4000);
console.log(cal);

const deleteItem = cal.splice(0, 1);
console.log(deleteItem);

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  /* this.names = function () {
    return `${this.firstName} ${this.lastName} is a good Woman!`;
  }; */
}

Person.prototype.names = function () {
  return `${this.firstName} ${this.lastName} is a good Woman!`;
};

const person1 = new Person('Chioma', 'Chimezie', '11-20-1891');
console.log(person1.names());

const workersProfile = ['Eat', 'Code', 'Sleep', 'Rinse and Repeat'];

const intergers = new Object('Eat', 'Sleep', 'Code', 'Rinse and Repeat');
console.log(intergers);

const id = 'Sleep';
const worker = [];

const profile = workersProfile.find((item) => {
  if (item === id) {
    console.log(`Yes item exist!`);
    worker.push(item);
    console.log(worker);
    return worker;
  } else {
    console.log(`item does not exist in the array!`);
    return false;
  }
});

const cars = Array('Hylander', 'Benz', 'BMW', 'Camry', 'G-Wagon');
const cars1 = Array('100', '200', '500', '130', '110');
const cars2 = Array(100, 200, 500, 130, 110);
const sortCars = cars2.sort(function (a, b) {
  console.log(a - b);
  return a - b;
});
console.log(sortCars);

const getData = (param) => console.log('John');
const getData1 = (param) => 'Rest';

getData();
const get = getData1();
console.log(get);

numberGo = 5;
var numberGo;

console.log(numberGo);

const submit = this.form.submit();
console.log(SubmitEvent);
