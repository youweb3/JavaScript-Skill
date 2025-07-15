function calculate(operation) {
    //convert to number
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    let result;

    //Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid number.";
    } else {
        //calculation based on operation
        switch (operation) {
            case "add":
                result = `${num1} + ${num2} = ${num1 + num2}`;
                break;
            case "subtract":
                result = `${num1} - ${num2} = ${num1 - num2}`;
                break;
            case "multiply":
                result = `${num1} * ${num2} = ${num1 * num2}`;
                break;
            case "divide":
                if (num2 === 0) {
                    result = "Cannot divide by zero.";
                } else {
                    result = `${num1} / ${num2} = ${num1 / num2}`;
                }
                break;
            default:
                result = "unknown operation.";
        }
    }
    //Display the result in the HTML
    document.getElementById('result').innerText = result;
}