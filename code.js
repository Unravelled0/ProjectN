

let listdiv = document.querySelector('.value_list');
new Sortable(listdiv);

let listarray = [];
let pic1 = document.querySelector('.arrows');

pic1.addEventListener('mouseover', ()=>{
    if(pic1.src == 'http://127.0.0.1:5500/Photos/lowToHighGrey.svg')
    pic1.src = 'Photos/HighToLowblack.svg';
    else if(pic1.src == 'http://127.0.0.1:5500/Photos/HighToLowgrey.svg')
    pic1.src = 'Photos/lowToHighBlack.svg';
});

pic1.addEventListener('mouseout',() =>{
    if(pic1.src == 'http://127.0.0.1:5500/Photos/HighToLowblack.svg')
    pic1.src = 'Photos/lowToHighGrey.svg';
    else if(pic1.src == 'http://127.0.0.1:5500/Photos/lowToHighBlack.svg')
    pic1.src = 'Photos/HighToLowgrey.svg';
});


























// let todos = JSON.parse(localStorage.getItem("todo-list"));

// function showTodo() {
//     let li = "";
//     if(todos){
//     todos.forEach((todo,id) => {
//         li +=  ` <li class="value_list">
//         <label for="${id}">
//             <p>${todo.name}</p>
//         </label>

//         <button class="delete" onclick=''> </button>
        
//     </li>`;
//     });
//         }
//     taskBox.innerHTML = li;
// }

// showTodo();

// function deleteTask(deleteId){
//     console.log('delete')
//     todos.splice(deleteId,1);
//     localStorage.setItem("todo-list", JSON.stringify(todos));
//     showTodo();
// }


// deleteButton.addEventListener('click',deleteTask);
//  actionButton.addEventListener('click',addFunction);
//  function addFunction() {
//     let userTask = taskInput.value.trim();
//     if(!todos){
//         todos = [];
//      }
//     if(userTask) {
//         let taskInfo = {name: userTask, status:"pending"};
//         todos.push(taskInfo);
//         taskInput.value = "";
//         localStorage.setItem("todo-list", JSON.stringify(todos));
//         showTodo();
//     }
//   }

// // taskInput.addEventListener("keyup", e => {
// //     let userTask = taskInput.value.trim();
// //     if(e.key == "Enter" && userTask){
// //         if(!todos){
// //             todos = [];
// //         }
// //         taskInput.value = "";
// //         let taskInfo = {name: userTask, status:"pending"};
// //         todos.push(taskInfo);
// //         localStorage.setItem("todo-list", JSON.stringify(todos));
// //         showTodo();
// //     }
// // });

// todoListElement === null || todoListElement === void 0 ? void 0 : todoListElement.addEventListener("click", (event) => {
//     var _a;
//     const target = event.target;
//     if (target.className.includes('delete')) {
//         // (event.target as HTMLElement).parentElement?.remove();
//         (_a = target.closest('li')) === null || _a === void 0 ? void 0 : _a.remove();
//         updateTheListoCounter();
//     }
// });


  
