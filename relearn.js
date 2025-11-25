var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var total = document.getElementById("total");

var output = document.getElementById("output");

function add(){
    output.innerHTML += "+";
}
function subtract(){
    output.innerHTML += "-";
}
function multi(){
    output.innerHTML += "*";
}
function divided(){
    output.innerHTML += "/";
}

function zeroes(){
    output.innerHTML += 0;
}
function unos(){
    output.innerHTML += 1;
}
plus.addEventListener('click', add);
minus.addEventListener('click', subtract);
multiply.addEventListener('click', multi);
divide.addEventListener('click', divided);

zero.addEventListener('click', zeroes);
one.addEventListener('click', unos);
