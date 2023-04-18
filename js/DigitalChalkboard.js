function lastItem() {
    var k = "Your Inputs: ";
    var input = document.getElementsByName("input"); // the getElementByName function does not output an array;
    const output = []; // declare an output array 

    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        k = k + a.value + " ";
        output.push(a.value) // push the input value to the array
    };

    console.log(input)
    console.log(k)

    document.getElementById("Yourinput").innerText = k;
    document.getElementById("output1").innerText = "The Last Item: " + output.sort()[output.length - 1];
    // output.sort() --> sort the output array in alphabetic order
    // [output.length - 1] --> access the last object in the array
    document.getElementById("output2").innerText = "The Sorted Array: " + output.sort();
}