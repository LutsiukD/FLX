const rootNode = document.getElementById('root');

const todoItems = [{
    isDone: false, 
    id: 12345, 
    description: 'Todo 1'
}];

const wrapperClass = document.createAttribute('class');
wrapperClass.value = 'application-view';

const addViewDiv = document.createElement('div');
addViewDiv.setAttributeNode(wrapperClass);

const inputHeader = document.createElement('h1');
inputHeader.setAttribute('class', 'todo-header');
inputHeader.textContent = 'Add task';

const inputNewTask = document.createElement('input');
inputNewTask.setAttribute('type', 'text');
inputNewTask.setAttribute('class', 'todo-input-task');

const btnWrapper = document.createElement('div');
btnWrapper.setAttribute('class', 'btn-wrapper');

const btnAdd = document.createElement('button');
btnAdd.setAttribute('class', 'btn-add');
btnAdd.disabled = true;
btnAdd.textContent = 'Save Changes';

const btnCancel = document.createElement('button');
btnCancel.setAttribute('class', 'btn-cancel');
btnCancel.textContent = 'Cancel';

btnWrapper.appendChild(btnCancel);
btnWrapper.appendChild(btnAdd);
addViewDiv.appendChild(inputHeader);
addViewDiv.appendChild(inputNewTask);
addViewDiv.appendChild(btnWrapper);
rootNode.appendChild(addViewDiv);


inputNewTask.onchange = inputNewTask.onkeyup = e => {
    const newTaskText = inputNewTask.value.trim();

    newTaskText ? btnAdd.disabled = false : btnAdd.disabled = true;

    if (e.key === 'Enter') {
        if (newTaskText) {
        addTask(newTaskText);
        }
    }
};
const todoList = document.createElement('div');
todoList.setAttribute('class', 'todo-list');
rootNode.appendChild(todoList);

btnAdd.onclick = () => {
    addTask(inputNewTask.value.trim());
  }

const addTask = newTaskText => {
    const listItem = document.createElement('div');
    listItem.setAttribute('class', 'list-item');

    const taskText = document.createElement('span');
    taskText.appendChild(document.createTextNode(newTaskText));

    const todoImg = document.createElement('img');
    todoImg.setAttribute('src', './assets/img/todo-s.png');

    const checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'check-btn');

    const deleteImg = document.createElement('img');
    deleteImg.setAttribute('src', './assets/img/remove-s.jpg');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');

    checkBtn.appendChild(todoImg);
    deleteBtn.appendChild(deleteImg);
    listItem.appendChild(checkBtn);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);

    checkBtn.onclick = () => {
        todoImg.src = './assets/img/done-s.png';
        listItem.style.setProperty('background-color', 'grey');
        insertToBottom(listItem, todoList);
    }

    deleteBtn.onclick = () => {
        listItem.remove();
    }

    inputNewTask.value = '';
    btnAdd.disabled = true
}

const insertToBottom = (item, list) => {
    item.remove();
    list.appendChild(item);
}