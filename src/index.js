import React from "react";
import ReactDOM from "react-dom/client";
import "./css/App.css";
import App from "./components/App";

// Map - Create a new array by doing something  with each item in an array
var numbers = [2, 3, 4, 5, 6];
// function makeDouble(x) {
//   return x * 2;
// }
// const newnumbers = numbers.map(makeDouble);
// console.log(newnumbers);

// var newNumbers =[];

//  numbers.forEach(function double(x){
//   newNumbers.push(x *2);
// });
const doubleNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(doubleNumbers);

// Filter - Create a new array by keeping the items that return true.
const filternumbers = numbers.filter(function (x) {
  return x % 2 == 0;
});
console.log(filternumbers);
// var filternumbers = [];

// function filter_numbers(x){
//   if(x%2==0) filternumbers.push(x);
// }

//  numbers.forEach(filter_numbers);
//  console.log(filternumbers);

// Reduce - accumulate a value by doing something to each item in an array;
// var newnumbers = 0;
// numbers.forEach(function(currentNumber){
//   newnumbers += currentNumber
// });
var newnumbers = numbers.reduce(function (accumulate, currentNumber) {
  return accumulate + currentNumber;
});
console.log(newnumbers);

// Find - find the first item that matches from an Array.
const findnumber = numbers.find(function (num) {
  return num >= 5;
});
console.log(findnumber);

// findIndex - find the index of first item that matches
const findindex = numbers.findIndex(function (num) {
  return num >= 5;
});
console.log(findindex);

//Arrow Function - short cut way of writing function inside function
var numbers = [2, 3, 4, 5, 6];
// map
const Arrow_doubleNumbers = numbers.map((x) => {
  return x * 2;
});
console.log(Arrow_doubleNumbers);
// Filter - Create a new array by keeping the items that return true.
const arrow_filternumbers = numbers.filter((x) => {
  return x % 2 == 0;
});
console.log(arrow_filternumbers);
// findIndex
const shortcut = numbers.findIndex((num) => {
  return num >= 5;
});
console.log(shortcut);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
