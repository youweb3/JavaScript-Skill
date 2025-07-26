//array to hold tasks
let tasks = [];

//function to add a new task
function addTask() {
    const inputTask = document.getElementById(`taskInput`).value;
    if (inputTask) {
        tasks.push(inputTask); // Add task to the array
        document.getElementById(`taskInput`).value = ``; // Clear input field

        displayTasks(); // Call function to display tasks
    
    } else {
        alert(`Please enter a task.`); // Alert if input is empty
    }
}

//function to display tasks
function displayTasks() {
    const taskList = document.getElementById(`taskList`); // Get the task list element
    taskList.innerHTML = `` ; // Clear the list before displaying tasks

    tasks.forEach ((task, index) => {
        //create a new <li> element for each task
        const listItem = document.createElement(`li`);
        // set the text of the <li> element to the task
        listItem.textContent = task;

        const removeButton = document.createElement(`button`);//create a remove button
        removeButton.textContent = `Remove`; // Set the text of the button
        removeButton.addEventListener(`click`, () => {// Add click event to remove the task
            removeTask(index); // Add click event to remove the task
        })

        listItem.appendChild(removeButton); // Append the button to the <li> element
        taskList.appendChild(listItem);  //Add the <li> to the <ul> with id "taskList"
    });
}


//function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    displayTasks(); // Call function to display tasks again
}

//Connect the "Add Task" button to the addTask functiion
document.getElementById(`addTaskButton`).addEventListener(`click`, addTask);