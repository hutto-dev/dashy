const taskInput = document.getElementById("task-title");
const createBtn = document.getElementById("create-btn");
const backBtn = document.getElementById("back-btn");

//// TOAST ////
function showToast() {
  const toast = document.getElementById("toast");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

//// APP STATE ////
let selectedDay = null;

//// CREATE TASK ////

createBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!taskInput.value.trim()) {
    alert("Please enter a task");
    return;
  }
  if (!selectedDay) {
    alert("Please choose a day");
    return;
  }

  const newTask = {
    title: taskInput.value,
    day: selectedDay,
  };
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  taskInput.value = "";

  showToast();
});

//// BACK BUTTON ////

backBtn.addEventListener("click", () => {
  window.location.href = "todo.html";
});

/////// DATE BUTTONS
const todayButton = document.getElementById("create-today-btn");
const tomorrowButton = document.getElementById("create-tomorrow-btn");
const calendarButton = document.getElementById("create-calendar-btn");

todayButton.addEventListener("click", (event) => {
  event.preventDefault();
  todayButton.classList.add("active");
  tomorrowButton.classList.remove("active");
  selectedDay = "today";
});

tomorrowButton.addEventListener("click", (event) => {
  event.preventDefault();
  tomorrowButton.classList.add("active");
  todayButton.classList.remove("active");
  selectedDay = "tomorrow";
});
