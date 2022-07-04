//EX1

var num = prompt("enter a number between 0 to 1000");
num >= 0 && num <= 1000 ? alert("ok") : alert("Not Ok");
//Ex2
var num = prompt("Is your number above 5 digits?");
num.length >= 5 ? alert("ok") : alert("Not Ok");
//Ex3
var str = prompt("enter a string");
str.length >= 5 ? alert("ok") : alert("Not Ok");

//Ex4
var sum = 0;
var num = prompt("enter a number");
num = parseInt(num);
for (let i = 0; i < 7; i++) {
  if (isOk(num)) {
    sum = sum + num;
    var num = prompt("enter a number");
    num = parseInt(num);
  } else {
    alert("ERORR");
    break;
  }
  if (i === 6) alert("The average is :" + sum / 7);
}
function isOk(num) {
  var ok;
  num >= 0 ? (ok = true) : (ok = false);
  return ok;
}

//Ex5
var num = prompt("enter a number");
num = parseInt(num);
if (num % 5 === 0) alert("Five");
else if (num % 2 === 0) alert("Even");
else if (num >= 10 && num <= 100) alert("Between 10 to 100");
else if (num <= 1000 && num >= 101) alert("Between 101 to 1000");
else alert("NOT");

//Ex6  false,true,false

//challenge ex2 Matchstick Houses

var house = prompt("enter the num of the step");
var step = parseInt(house);
alert("the number of the matchsticks is " + matchHouses(step));

function matchHouses(step) {
  return step === 0 ? 0 : step * 5 + 1;
}

//challenge ex3 Perimeters with a Catch
var i = prompt("enter the num of the rib");
i = parseInt(i);
var char = prompt("enter the 's' for squre and 'c' for circle");
alert("the p of the shape is  " + pshape(char, i));
function pshape(char, i) {
  var p = null;
  char === "s" || char === "S"
    ? (p = 4 * i)
    : char === "c" || char === "C"
    ? (p = 6.28 * i)
    : (p = 0);

  return p;
}

//challenge ex4 loops
var numOfLoops = prompt("enter the num of lines you want");
numOfLoops = parseInt(numOfLoops);
for (let i = 0; i <= numOfLoops; i++) {
  console.log("$".repeat(i));
}
