let zeroConst = 0, 
    oneElement = 1,
    max = 10;

let tasks = [];

function addTask(el) {
    el.preventDefault();
    let inputElem = document.querySelector('#taskInput');

    if (tasks.length < max) {
        tasks.push({task: inputElem.value, completed: false});
        inputElem.value = '';
        
        updateList();
    } else {   
        let header = document.getElementById('warning_list-limit');
        header.innerHTML = 'Maximum item per list are created';
        
        let button = document.getElementById('addTaskButton');
        let inputForm = document.getElementById('taskInput');
        button.disabled = true;
        inputForm.disabled = true;
        
        updateList();
    }
}

function deleteTask(index) {
    tasks.splice(index, oneElement);
    
    let header = document.getElementById('warning_list-limit');
    header.innerHTML = '';
    
    let button = document.getElementById('addTaskButton');
    let inputForm = document.getElementById('taskInput');
    button.disabled = false;
    inputForm.disabled = false;
    
    updateList();
}

function completedTask(index) {
    tasks[index].completed = true;
    updateList();
}

function init() {
    document.querySelector('.form').addEventListener('submit',addTask);
    updateList();
}

function updateList() {

    let listElem = document.getElementById('list');
    let html = '';

    for(let t in tasks) {
        if(t <= max) {
        html += `<div class="task" data-task-index="${t}" draggable="true">
                    <div class="action">
                        <div class="checkbox">
                            <i class="material-icons hidden">check_box_outline_blank</i>
                            <i class="material-icons">check_box</i>
                        </div> 
                        <div class='text'>`
                            + tasks[t].task + 
                        `</div>
                    </div>
                    <div class="buttons">
                        <button class="btn-delete" type="button">
                            <i class="material-icons">delete</i>
                        </button>
                    </div>
                </div>`;
        }
    }

    listElem.innerHTML = html;

    listElem.querySelectorAll('.btn-delete').forEach((btn, index) => {
        btn.addEventListener(`click`, function() {
            deleteTask(index);
        });
    });

    listElem.querySelectorAll('.action').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            completedTask(index);
        });
    });

    let summ = tasks.length;
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].completed) {
            let crtCompl = document.getElementsByClassName('action')[i];
            crtCompl.className = 'action checked';
        }
    }

    let dragSrcEl = null;
    
    function handleDragStart(el) {
        dragSrcEl = this;
        el.dataTransfer.effectAllowed = 'move';
        el.dataTransfer.setData('text/html', this.innerHTML);
        
        let newInd = +el.target.getAttribute('data-task-index')+oneElement;
        let oldIndex = +el.target.getAttribute('data-task-index');

    }

    function handleDragOver(el) {
        if (el.preventDefault) {
            el.preventDefault();
        }

        el.dataTransfer.dropEffect = 'move'; 
        return false;
    }

    function handleDragEnter(el) {
        this.classList.add('over');
    }

    function handleDragLeave(el) {
        this.classList.remove('over');
    }

    function handleDrop(el) {
        if (el.stopPropagation) {
            el.stopPropagation();
        }
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = el.dataTransfer.getData('text/html');
        }
        let oldInd = +el.target.getAttribute('data-task-index')+oneElement;
        let newInd = +el.target.getAttribute('data-task-index');
        tasks.splice(newInd, zeroConst, tasks.splice(oldInd, oneElement)[zeroConst]);
        return false;
    }
    
    function handleDragEnd(el) {
        [].forEach.call(allTasks, function (col) {
            col.classList.remove('over');
        });
    }

    let allTasks = document.querySelectorAll('.task');
    [].forEach.call(allTasks, function(col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
    });
}

init();