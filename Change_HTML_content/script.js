function changeText (){
    //first we store the element with the id "change" in a variable called element
    let element = document.getElementById("change"); 
    //then we change the content of the element using the innerHTML property--
    //-- and assign new text to the HTML h1
    element.innerHTML = "Hello World ! This is my Javascript Skill!"
    
    //instead of innerHTML we can use 'textContent'

}


//inside the function we can use this code below to change the text:--
// --document.getElementById('change').innerHTML = 'Thanks for liking my Webpage';
//but storing the element in a variable is primarily for readability and potential reuse. 
//it can make your code easier to understand and maintain, sepecially if you need to reference the element multiple times.