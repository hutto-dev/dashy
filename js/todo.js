//// LOAD TASKS FROM STORAGE ////
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//// ADDING TASK BUTTON ////

const addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.addEventListener("click", () => {
  window.location.href = "create-task.html";
});

//// GETTING TASKS /////

//// DISPLAY TASKS /////

const todayList = document.getElementById("today-task");
const tomorrowList = document.getElementById("tomorrow-task");

for (let i = 0; i < tasks.length; i++) {
  const li = document.createElement("li");
  li.classList.add("task-box");
  li.innerHTML = `
    <label>
      <input type='checkbox' />
      ${tasks[i].title}
    </label>
  `;

  if (tasks[i].day === "today") {
    todayList.appendChild(li);
  } else if (tasks[i].day === "tomorrow") {
    tomorrowList.appendChild(li);
  }

  console.log(tasks[i]);
  console.log(li);
}

// add "No tasks for today" and "No tasks for tomorrow" when blank
