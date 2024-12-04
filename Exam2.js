Dynamic Web App Example
To-Do List App


<!DOCTYPE html>
<html lang="en">
<head>
    <title>To-Do App</title>
</head>
<body>
    <input type="text" id="taskInput" placeholder="Enter task">
    <button id="addTask">Add Task</button>
    <ul id="taskList"></ul>

    <script>
        const taskInput = document.getElementById("taskInput");
        const addTask = document.getElementById("addTask");
        const taskList = document.getElementById("taskList");

        addTask.addEventListener("click", () => {
            const task = taskInput.value;
            if (task) {
                const li = document.createElement("li");
                li.textContent = task;
                taskList.appendChild(li);
                taskInput.value = "";
            }
        });
    </script>
</body>
</html>
