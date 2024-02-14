const taskList = document.querySelector('.item-list tbody');

const tasks = [
    { description: "First item", completed: false },
    { description: "Second item", completed: true }
];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const row = document.createElement('tr');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        checkbox.addEventListener('change', () => {
            tasks[index].completed = checkbox.checked;
            taskCell.classList.toggle('completed');
        });
        row.appendChild(checkbox);

        const taskCell = document.createElement('td');
        taskCell.textContent = task.description;
        taskCell.classList.toggle('completed', task.completed);
        row.appendChild(taskCell);

        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'trashCan.webp';
        deleteIcon.classList.add('delete-icon');
        deleteIcon.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });
        const deleteCell = document.createElement('td');
        deleteCell.appendChild(deleteIcon);
        row.appendChild(deleteCell);

        taskList.appendChild(row);
    });
}

const addButton = document.querySelector('#add-container button');
addButton.addEventListener('click', () => {
    const newTaskInput = document.querySelector('#type-input');
    const newTaskText = newTaskInput.value.trim();
    if (newTaskText) {
        tasks.push({ description: newTaskText, completed: false });
        renderTasks();
        newTaskInput.value = '';
    }
});
renderTasks();