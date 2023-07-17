// Array to store tasks
let tasks = [];

// To Add ToDos
function addTask() {

    const input = document.getElementById('taskInput');
    const inputValue = input.value;

    if (inputValue != '') {
        const task = {
            id: Date.now(),
            title: inputValue,
            completed: false
        }
        tasks.push(task);
    }
    input.value = '';
    display()

}

// To delete ToDos
function deleteTask(id) {
    // tasks.filter(task => task.id !== id);
    tasks = tasks.filter(task => task.id !== id);
    display();
}

// To mark as complete ToDos
function completeTask(id) {
    tasks.map(task => {
        if (task.id == id) {
            // task.completed = !task.complete;
            if (task.completed) {
                task.completed = false;
            }
            else {
                task.completed = true;

            }
        }
    })
    // display();
    updateCompleteTask(id);
}
function updateCompleteTask(id) {
    const taskElement = document.getElementById(id);

    const task = tasks.find(task => task.id === id);
    if (task.completed) {
        taskElement.style.textDecorationLine = "line-through";
    }
    else {

        taskElement.style.textDecorationLine = "none";
    }

    // display();

}


// To display ToDos
function display() {

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (tasks.length != 0) {

        tasks.forEach(task => {

            if (task.completed) {


                const listItem = document.createElement('div')
                listItem.setAttribute('id', task.id)
                listItem.setAttribute('class', "todoCont")
                listItem.style.textDecorationLine = "line-through";
                listItem.innerHTML = task.title;
                taskList.appendChild(listItem);

                //create img for complete
                const complete = document.createElement('img')
                complete.setAttribute('src', "./check-svgrepo-com.svg")
                complete.setAttribute('class', "checkBtn")
                complete.addEventListener('click', () => completeTask(task.id))
                listItem.appendChild(complete);

                //create span for title
                // const title = document.createElement('span')
                // title.innerHTML = task.title;
                // listItem.appendChild(title);


                //create img for delete
                const del = document.createElement('img')
                del.setAttribute('src', "./delete-1-svgrepo-com.svg")
                del.addEventListener('click', () => deleteTask(task.id))
                listItem.appendChild(del);
            }
            else{
                const listItem = document.createElement('div')
                listItem.setAttribute('id', task.id)
                listItem.setAttribute('class', "todoCont")
                // listItem.style.textDecorationLine = "line-through";
                listItem.innerHTML = task.title;
                taskList.appendChild(listItem);

                //create img for complete
                const complete = document.createElement('img')
                complete.setAttribute('src', "./check-svgrepo-com.svg")
                complete.setAttribute('class', "checkBtn")
                complete.addEventListener('click', () => completeTask(task.id))
                listItem.appendChild(complete);

                //create span for title
                // const title = document.createElement('span')
                // title.innerHTML = task.title;
                // listItem.appendChild(title);


                //create img for delete
                const del = document.createElement('img')
                del.setAttribute('src', "./delete-1-svgrepo-com.svg")
                del.addEventListener('click', () => deleteTask(task.id))
                listItem.appendChild(del);
            }

        })

    }
}

display();