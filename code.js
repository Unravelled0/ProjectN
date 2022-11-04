const taskInput = document.querySelector(".task-input input");
taskBox = document.querySelector(".task-box");

let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
    let li = "";
    if(todos){
    todos.forEach((todo,id) => {
        li +=  ` <li class="task">
        <label for="${id}">
            <p>${todo.name}</p>
        </label>
        <div class="delete">
            <img class="delete-icon" src="photos\jpg2.svg" alt="as">
        </div>
    </li>`;
    });
        }
    taskBox.innerHTML = li;
}
showTodo();
taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask){
        if(!todos){
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name: userTask, status:"pending"};
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
});