// document.addEventListener("DOMContentLoaded", () => {
//   const taskList = new TaskList();
 
//   const newTaskForm = document.getElementById("create-task-form").children[2];
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

  
//   const taskList = document.getElementById("tasks");

//   const renderApp = () => (taskList.innerHTML = taskList.renderTasks());


//   newTaskForm.addEventListener("submit", function(event) {
//     debugger;
//     event.preventDefault();
//     taskList.createNewTask(newTaskDescription.value);
//     event.target.reset();
//     renderApp();
//   });

//   taskList.addEventListener("click", (event) => {

//     if (event.target.nodeName === "BUTTON") {
//       taskList.deleteTask(event.target.dataset.description);
//       renderApp();
//     }
//   });
// });



document.addEventListener("DOMContentLoaded", () => {
  // select form
  const form = document.querySelector("#create-task-form").children[2];
  // listen for submit of form
  form.addEventListener("click", afterSubmit);
 
  // write method on what to do when form is submitted
  function afterSubmit() {
    
    event.preventDefault();
    debugger;
    let descriptionOfTask = document.querySelector("#new-task-description");
    let tasks = document.querySelector("#tasks");
    let taskInput = document.createElement("input");
    let LiSpan = document.createElement("span");
    // create elements with the form data
     // add those elements inside the list div
    tasks.innerHTML += `
      <li>
        <div class="task-div">
          <input class="task-input" value="${descriptionOfTask.value}">
          <span class="delete-face">&#128540;</span>
        </div>
      </li>
    `;
    deletes = document.querySelectorAll(".delete-face");
    for (i = 0; i < deletes.length; i++) {
      deletes[i].addEventListener("click", deleteFace)
    }
    function deleteFace() {
      event.target.parentNode.parentNode.remove();
    }
  }
});