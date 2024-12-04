const d = new Date(2018, 11, 24, 10, 33);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

let x = false;
let y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object

age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;
