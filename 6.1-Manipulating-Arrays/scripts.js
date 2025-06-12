let array = [];

function addElement() {
    const inputValue = document.getElementById("inputField").value;
    array.push(inputValue);
    document.getElementById("inputField").value = ""; // Clear the input field after adding the element
    displayArray()
    // console.log(array);
}

function removeLastElement() {
    array.pop();
    displayArray();
    // console.log(array);
}

function addFirst(){
    const inputElement = document.getElementById("inputField").value;// we can use the same input field for adding first element
    // or we can create a new input field for adding first element, it's up to you this is a style choice - not a rule optioanl
    // In a real application, you might want to use a different input field for adding the first element,
    // but for simplicity, we will use the same input field
     
    //Each function has its own local scope.
    //Variable names inside functions are independent — they don't have to match.
    //You can name your variables whatever makes sense to you or makes the code clearer.
    array.unshift(inputElement);
    document.getElementById("inputField").value = ""; // Clear the input field after adding the element
    displayArray();
    // console.log(array);
}

function removeFirst() {
    array.shift();
    displayArray();
    // console.log(array); 
}

//function to display array elements
function displayArray() {
    const displayDiv = document.getElementById("arrayElement"); //find the div
    displayDiv.innerHTML = ""; //clear the div before displaying new elements

    if (array.length === 0) { // Check if the array is empty, we want to show a message if it is
        displayDiv.texContent = "The array is empty.";
        return; // means we stop the function here don't run the rest of the code
    }

    array.forEach((items, index) => {
        const element = document.createElement("div"); // create a new div for each element
        element.textContent =  `Element ${index + 1}: ${items}`; // set the text content of the div
        displayDiv.appendChild(element); // append the new div to the displayDiv
    });

    //array.forEach(...) goes through each item in the array.
    //item is the value (like "apple").
    // index is the position (like 0, 1, 2...)

    //Inside the loop:
    // document.createElement("div") => makes a new <div> for one item.
    // element.textContent = ... => puts text inside that <div>, like
    //displayDiv.appendChild(element) => adds that <div> to webpage, inside the <div id="arrayElement">.

}