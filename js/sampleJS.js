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