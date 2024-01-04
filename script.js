console.log("javascript loaded! ");




const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () =>
{

document.body.classList.toggle('dark-mode');


});



//attach an eventListner to the form submit event 

const addTaskForm = document.getElementById("add-task-form");//access to the form 
addTaskForm.addEventListener('submit', handleTaskSimbission);


//handleTask submission Function 

function handleTaskSimbission(event){

    event.preventDefault();//prevent from submission

    const taskTitle = document.getElementById('task-title').value;
    const timeSlot = document.getElementById('time-slot').value;

//validate input(optional)

//create new task element 

const newTaskItem = createTaskitem(taskTitle,timeSlot);



//append new task to task list container 

const taskListContainer  = document.querySelector('.task-list-container');
taskListContainer.appendChild(newTaskItem);


//clear form fields 
document.getElementById('.task-title').value = '';
document.getElementById('.time-slot').value = '';


//display success message 
showSuccessMessage  ( 'Task added sucessfully ! ');


//clear form fields


//logging the query selector to see how js interact with DOM 

const times  = document.querySelector("");










}

