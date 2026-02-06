const taskInput = document.getElementById("task-title");
const createBtn = document.getElementById("create-btn");
const backBtn = document.getElementById("back-btn");

let selectedDay = null;

createBtn.addEventListener("click", (event) => {
  event.preventDefault();
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

  // Create little pop up window "task added!" when clicked
});

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
  tomorrowButton.classList.toggle("active");
  todayButton.classList.remove("active");
  selectedDay = "tomorrow";
});
