let array = [];

function addElement() {
    const inputValue = document.getElementById("inputField").value;
    array.push(inputValue);
    document.getElementById("inputField").value = ""; // Clear the input field after adding the element
    console.log(array);
}

function removeLastElement() {
    array.pop();
    console.log(array);
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
    console.log(array);
}

function removeFirst() {
    array.shift();
    console.log(array); 
}