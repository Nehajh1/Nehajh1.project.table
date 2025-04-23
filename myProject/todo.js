// Function to add a new task to the list
function addTask() {
    // Get the value from the input field
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // If input is not empty, add the task
    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add a click event to mark task as completed when clicked
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Append the new task to the list
        document.getElementById('taskList').appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    } else {
        alert('Please enter a task');
    }
}
