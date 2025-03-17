const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    let taskText = inputBox.value.trim(); // Trim to remove extra spaces

    if (taskText === '') {  
        alert("You must write something!");
        return;
    } 

    // Create a new task (li)
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create a delete button (×)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.classList.add("delete-btn");
    li.appendChild(span);

    // Add to list
    listContainer.appendChild(li);
    
    // Clear input box after adding task
    inputBox.value = "";

    // Save to localStorage
    saveData();
}

// Check / Delete task event listener
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save tasks in localStorage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Load saved tasks from localStorage
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}
showTasks();