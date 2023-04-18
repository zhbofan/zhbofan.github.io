function howdy(firstName) {
    alert("Howdy " + firstName);
}

function conditional(){
    alert("Use Inspect to see the console and inspect the code.");
    var currentHour = new Date().getHours(); // predefined function, get the current hour of the day */
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("Good day!");
    } else {
        alert("Good evening!");
    }
}

// JS for loop //
for (i = 0; i < 5; i++) { // initialization; condition; for each loop do this (0-4, 5 times) //
    console.log("The number is " + i);
}

// Declarations:

/* var: declare a variable, can assign a value: var x=1; (global object) */
/* let: declare a block-scoped variable (can change in an if statement, but remain unchanged outside that statement, for example) */
/* const: creates a read-only reference to a value. */

// evalNumber()

function evalNumber(){
    // evalNumber() code goes here

    // create a prompt, asking for number
    var inputValue = prompt("Enter any five-digit number without commas")
    /* prompt returns string */
    /* Number is a wrapper, and casts the string as number */

    // evaluate the number
    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.")
        /* isNaN checks if the input is not a number */
        /* use || OR operator to test multiple conditions in the IF statement */
    } else if (inputValue % 2 == 0) {
        // DO THIS IS THE CONDITION IS TRUE
            alert(inputValue + " is an even number.")
        /* modulo -- remainder % */
    } else {
        // OTHERWISE DO THIS
            alert(inputValue + " is an odd number.")
    }
}

// JS operators
/* = assigns a value */
/* == compares value */
/* === compares value AND type */

/* != not equal */
/* !== not equal value OR not equal type */

// JS can manipulate the HTML page
/* Target content on the HTML page */
/* We can bind objects, elements, and content as values to variables */
/* lef selectedElement = document.getElementById("programCard") */
/* This targets an element with an id attribute of this value */
/* This entire elemnt is now bound as a value to this variable */
/* try console.log */

// changeTitle()

function changeTitle(){
    let selectedElement = document.getElementById("poems_title");
    console.log(selectedElement);
    selectedElement.innerText = "Counter-Poems";
}

// a function that displays the current minute in the div.
function currentMinute(){

    const date = new Date();
    const minute = date.getMinutes();

    let selectedElement = document.getElementById("current_minute");
    console.log(selectedElement);
    selectedElement.innerText = minute.toString();
}

// a button that when clicked makes an element disappear.
function disappear(){
    
    let selectedElement = document.getElementById("poem_revolution");
    console.log(selectedElement);
    selectedElement.style.display = "none";
}


// Objects
/* Very common as a strategy for grouping data, recording properties. */
/* Similar to dictionaries in Python */
/* dictionary_name = {"key_01": value_01, "key_02": value_02} */
/* Create a new object
    var book = new Object(); // object constructor
    var album = {}; // creates a new undefined object called album */

var z = new Object();
z.foo = 42; // dot notation
z.bar = "newValue";
console.log(z);

var mapSetting = {
    id: "mapID",
    zoomOffset: -1,
    center:latLng
    };

mapSetting.id // Dot method
mapSetting["id"] // Bracket method
var newVariable = mapSetting.zoomOffset


/* Arrarys */
var presidents = ['Washington', 'Adams', 'Jefferson'];
presidents[0]; // Washington, index starts with 0; 

for (let i = 0; i < presidents.length; i++) {
    console.log(presidents[i]);
}

presidents.push('Biden');

for (let i = 0; i < presidents.length; i++) {
    console.log(presidents[i]);
}

// Put added input to whatever index slot
presidents[45] = 'Biden'


/* Functions

// Syntax

function Name(parameters){
    statements ;
    return value;
};

// Parameters

Provide a way to pass a value into the function;
Functions use the parameter values in the statements in the function.

// Return

Ends the function and passes a value out of the value. 

*/

function functionSample(a, b) {
    let remainder = a%b;
    return remainder; // add a return statement here to get the value; code after this line is unreachable
}
console.log(functionSample(12, 11)); // have to get the value out of the function


// a recursive function

function functionSample(number){
    if (number === 0) {
        console.log("Number is even.")
    } else if (number === 1) {
        console.log("Number is odd.")
    } else {
        number = number - 2;
        return functionSample(number);
    }
}
console.log(functionSample(36));

/* Strict Mode

Default mode is non-strict, aka "sloppy mode"
Strict mode features
    Tightens some of JS permissiveness
    Throws more errors
    May run slightly faster
    May undermine compatibility with future versions of JS
Invoke by script or by function
Add 'use strict'; with quotes, either at the top of a script or top of a function

*/

/* Nested function */

function parentFunction(){
    let a = 1;
    function childFunction(){
        var b = a + 2; // has access to the variable declared in the parentFunction; not vice versa!
        return b;
    }
    return childFunction();
}


// addElements()
function addElements(){
    var valueArray = ['first', 'second', 'third'];
    for (i in valueArray){
        var newDiv = document.createElement('div'); // create a new <div> for each value
        newDiv.setAttribute('class', 'row');
        newDiv.setAttribute('id', 'div '+i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i];
    }
}

/* Array: an object with an indexed list of elements.
Standard example with mixed data types;
Methods:
.push(addThisValue)
.indexOf()
.pop()
for (element of newArray) {console.log(index, element)}

newArray.length = 0 // reassign the array;


*/

