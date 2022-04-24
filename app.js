// Define UI Vars

const form = document.querySelector('#task-form');

// Add Task button will add li tag with data to ul -> ul.collection
const taskList = document.querySelector('.collection');
// Input field for adding tasks
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear tasks
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    } else {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create Text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));

        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append link to li -> appendChild() will add inside the element as a child
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';

    }
    e.preventDefault();
}

// Remove Task - event delegation -> addEventListener to ul then specify the target
// so that newly added tasks after page loaded, can be deleted by this event listener
function removeTask(e){
    // When it's clicked, e.target is i tag -> parent of i tag is a tag created when
    // new task is added
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you Sure')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks
function clearTasks(){
    taskList.innerHTML = '';
    // console.log('cleared tasks');
    // Faster
    // while(taskList.firstChild){
    //     taskList.removeChild(taskList.firstChild);
    // }
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}