const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); 

function addTask() {
    if (inputBox.value.trim() === '') {  
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Close button (×)
        span.classList.add("delete-btn");

        li.appendChild(span);
        listContainer.appendChild(li);
        
        inputBox.value = "";
        saveData();
    }
}

// Event listener for checking & deleting tasks
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
function showTask() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;

        // Reattach event listeners to saved tasks
        let items = listContainer.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"; // Close button (×)
            span.classList.add("delete-btn");
            items[i].appendChild(span);
        }
    }
}
showTask();