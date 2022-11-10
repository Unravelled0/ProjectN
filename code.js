const taskInput = document.querySelector(".task-input input");

const actionButton = document.querySelector('.action');



taskBox = document.querySelector(".value_list");

const deleteButton = document.querySelector('.delete')

let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
    let li = "";
    if(todos){
    todos.forEach((todo,id) => {
        li +=  ` <li class="value_list">
        <label for="${id}">
            <p>${todo.name}</p>
        </label>

        <button class="delete" onclick=''> </button>
        
    </li>`;
    });
        }
    taskBox.innerHTML = li;
}

showTodo();

function deleteTask(deleteId){
    console.log('delete')
    todos.splice(deleteId,1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
}


deleteButton.addEventListener('click',deleteTask);
 actionButton.addEventListener('click',addFunction);
 function addFunction() {
    let userTask = taskInput.value.trim();
    if(!todos){
        todos = [];
     }
    if(userTask) {
        let taskInfo = {name: userTask, status:"pending"};
        todos.push(taskInfo);
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
  }

// taskInput.addEventListener("keyup", e => {
//     let userTask = taskInput.value.trim();
//     if(e.key == "Enter" && userTask){
//         if(!todos){
//             todos = [];
//         }
//         taskInput.value = "";
//         let taskInfo = {name: userTask, status:"pending"};
//         todos.push(taskInfo);
//         localStorage.setItem("todo-list", JSON.stringify(todos));
//         showTodo();
//     }
// });

todoListElement === null || todoListElement === void 0 ? void 0 : todoListElement.addEventListener("click", (event) => {
    var _a;
    const target = event.target;
    if (target.className.includes('delete')) {
        // (event.target as HTMLElement).parentElement?.remove();
        (_a = target.closest('li')) === null || _a === void 0 ? void 0 : _a.remove();
        updateTheListoCounter();
    }
});


  
