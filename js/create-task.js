const taskInput = document.getElementById("task-title");
const createBtn = document.getElementById("create-btn");

createBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newTask = taskInput.value;
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  taskInput.value = "";
});
