const taskInput = document.getElementById("task-title");
const createBtn = document.getElementById("create-btn");
const backBtn = document.getElementById("back-btn");

createBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newTask = taskInput.value;
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
  todayButton.classList.toggle("active");
});

tomorrowButton.addEventListener("click", (event) => {
  event.preventDefault();
  tomorrowButton.classList.toggle("active");
});

//////// BEST PRACTICE /////////

// const container = document.querySelector(".date-options");

// container.addEventListener("click", (event) => {
//   const clickedButton = event.target.closest(".date-btn");
//   if (!clickedButton) return;

//   container.querySelectorAll(".date-btn").forEach((button) => {
//     button.classList.remove("active");
//   });

//   clickedButton.classList.add("active");

//   // best practice: store the selected value
//   const selectedOption = clickedButton.dataset.option;
//   console.log(selectedOption);
// });
