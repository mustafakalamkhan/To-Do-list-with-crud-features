console.log("todolist.js loaded");
const inputBox = document.getElementById("input-box");
const dueDate = document.getElementById("due-date");
const reminderTime = document.getElementById("reminder-time");
const listContainer = document.getElementById("list-container");

function addTask() {
    console.log('I am here');
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li"); 
        var taskText = document.createElement('strong');
        taskText.innerHTML = inputBox.value; // test123
        if (dueDate.value)
        taskText.innerHTML += '<br>'+`Due Date: ${dueDate.value}`; 
        if(reminderTime.value) {
            scheduleReminder(inputBox.value, reminderTime.value); // Fixed "schedulereminder" to "scheduleReminder"
            taskText.innerHTML += '<br>'+`Reminder : ${reminderTime.value}`
          }
        console.log('tasktext == ',taskText);
        li.appendChild(taskText);
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dueDate.value = "";
    reminderTime.value = "";
    saveData();
}

function scheduleReminder(task, time) { // Fixed function name to match call
    const now = new Date();
    const reminder = new Date();
    const [hours, minutes] = time.split(":");

    reminder.setHours(hours);
    reminder.setMinutes(minutes);
    reminder.setSeconds(0);

    const timeDiff = reminder.getTime() - now.getTime();

    if (timeDiff > 0) 
        setTimeout(() => { alert(`Reminder: ${task}`); }, timeDiff);
    }

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); // Fixed "classLift" to "classList"
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();