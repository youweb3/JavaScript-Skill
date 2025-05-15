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
    listOfTasks.innerHTML = ""; // clear the list before displaying new tasks
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li'); //create a new list item for each task
        
        //create the checkbox to mark tasks as completed
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.onchange = () => {
            console.log("Checkbox state changed:", checkbox.checked);
            li.classList.toggle('completed', checkbox.checked); //toggle the completed class on the list item
        };

        li.textContent = task;//set the text of the list content to the task
        li.prepend(checkbox); //add the checkbox to the beginning or before of the list item


        //create an "EDIT" button
        const editButton = document.createElement("button")
        editButton.textContent = "Edit";
        editButton.onclick = () => {
            const newTask = prompt("Edit your Task:", task)
            if(newTask){
                tasks[index] = newTask; // update the task in the array
                displayTask(); // refresh the task list
            }
        };
        li.appendChild(editButton);

        //create the "remove" button for each task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeTask(index); //add a click event listener to the button
        li.appendChild(removeButton); //append the button to the list item  
        listOfTasks.appendChild(li); //append the list item to the task list
    });


}


//Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); //remove the task from the array
    displayTask(); //update the task list display
}



//this function for "clearAllTask" button in HTML file

 function clearAllTasks() {
    console.log("working");
    tasks = []; //clear the tasks array
    displayTask(); //update the task list display
    alert("All tasks have been cleared!"); //alert the user
    
};