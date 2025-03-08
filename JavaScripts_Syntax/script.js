//Variables declared with var, let and const.
var myCar = "HUNDAI";
let myCarAge = 2012;
const myCarColor = "Blue";

//FUNCTIONS:

// 1: Named Function:
function namedFunction() {
    console.log('this is a named function.');

}
namedFunction();

// 2: Anonymous Function assigned to a variable:
let anonymousFunction = function() {
    console.log('this is a anonymous function.');
    
}
anonymousFunction();

// 3:Built-in functions: (example: parsInt())
 let numberString = "123";
 let parsedNumber = parseInt(numberString);
    console.log(parsedNumber); //parseInt() function converts a string to an integer.


// 4: if/else conditional statement:
let condition = true;
if (condition) {
    console.log('the conditon is true');
} else{
    console.log('the conditon is false');
    
}


// 5: switch statement:
let day = 3;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;              
    default:
        console.log('Weekend');
        
}


// 6: Arrays of different data types:
let stringArray = ['apple', 'banana', 'orange']; //array of strings
let numberArray = [1, 2, 3, 4, 5]; //array of numbers
let booleanArray = [true, false, true]; //array of boolean values
let mixedArray = ['apple', 1, true]; //array of mixed data types



// 7: Loops:
//loop through an array using for loop:
for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}

// Creating and using objects:
let person = {
    firstName: 'Yousef',
    lastName: 'Shaikhan',
    age: 34,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName());//Access fullName() method of the person object.
console.log("Person's first name:", person.firstName);//Access firstName property of the person object.