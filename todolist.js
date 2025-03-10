const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); 

function addTask() {
    if (inputBox.value.trim() === '') {  
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Close button (×)
        span.classList.add("delete-btn");
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
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
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load saved tasks from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();