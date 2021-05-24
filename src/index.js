document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
 
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  
  const taskList = document.getElementById("tasks");

  const renderApp = () => (taskList.innerHTML = taskList.renderTasks());


  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    event.target.reset();
    renderApp();
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      taskList.deleteTask(event.target.dataset.description);
      renderApp();
    }
  });
});