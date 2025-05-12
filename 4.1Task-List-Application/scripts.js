//Array to store tasks
let tasks = [];

//function to add a task when clicked on the button

function addTask() {
    const inputTask = document.getElementById("taskInput").value; //get the value of the input field
    if (inputTask) {
        tasks.push(inputTask); //add the task to the array, push method is used to add an element to the end of an array
        document.getElementById("taskInput").value = ""; //clear the input field
        displayTask();  // this function will display the tasks in the list
    } else {
        alert("please enter yout task");
    }
}

//Function to display tasks

function displayTask(){
    const listOfTasks = document.getElementById('taskList'); //get the taskList ul element
    listOfTasks.innerHTML = ""; // clear the current task list
    tasks.forEach((task, index) => {
        const li = document.createElement('li'); //create a new list item for each task
        li.textContent = task; //set the text of the list content to the task
        const removeButton = document.createElement('button'); //create a remove button
        removeButton.textContent = "Remove"; //set the button text to "Remove"
        removeButton.onclick = () => removeTask(index); //add a click event listener to the button
        li.appendChild(removeButton); //append the button to the list item  
        listOfTasks.appendChild(li); //append the list item to the task list
    });

            // Create and append the "Clear All" button below the list
            if (tasks.length > 0) {
                const clearAllButton = document.createElement('button');
                clearAllButton.textContent = "Clear All";
                clearAllButton.onclick = () => clearAllTasks();
                taskList.appendChild(clearAllButton);
            }

}


//Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); //remove the task from the array
    displayTask(); //update the task list display
}

// //Function to clear all tasks
function clearAllTasks() {
    tasks = []; //clear the tasks array
    const listOfTasks = document.getElementById('taskList'); //get the taskList ul element
    listOfTasks.innerHTML = ""; // clear the current task list  
    displayTask(); //update the task list display
}


//this function for "clearAllTask" button in HTML file

// function clearAllTasks() {
//   tasks = []; //clear the tasks array
//   displayTask(); //update the task list display
// }