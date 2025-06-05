numbers = [1.2, 3.9, 5.8, 4.6, 2.3]; //outside/ global

function calculateMean (num) {
    // here, num is now equal to numbers
    // num = [1.2, 3.9, 5.8, 4.6, 2.3]

    let sum = 0;
    for( let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    return sum / num.length;
}

let mean = calculateMean(numbers);
let roundeAverage = Math.round(mean * 100) / 100;
let result = "The average of the numbers is:" + roundeAverage;
console.log(result);

//we use the PARAMETERS when you want to make function REUSABLE for different array.
//for example:
let score = [1, 2, 3, 4, 5];
console.log("The score avarage is:" + calculateMean(score));
