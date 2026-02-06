//// ADDING TASK BUTTON ////

const addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.addEventListener("click", () => {
  window.location.href = "create-task.html";
});

//// GETTING TASKS /////
const taskArray = JSON.parse(localStorage.getItem("tasks"));

//// DISPLAY TASKS /////

const todayList = document.getElementById("today-task");
const tomorrowList = document.getElementById("tomorrow-task");

for (i = 0; i < taskArray.length; i++) {
  const li = document.createElement("li");
  li.classList.add("task-box");
  li.textContent = taskArray[i];
  todayList.appendChild(li);

  console.log(taskArray[i]);
  console.log(li);
}

// add "No tasks for today" and "No tasks for tomorrow" when blank
