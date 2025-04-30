let submit = document.getElementById("submitButton")
let dropdown = document.getElementById("dropdown").value
let checkbox = document.getElementById("checkbox").value
let form = document.getElementById("forms")
let tasks = `[]`
let today = Date
let number = 0

let taskContain = document.createElement("div")
taskContain.id = "taskmanager"
document.body.append(taskContain)

form.addEventListener("submit", function(i) {
    

    let text = document.getElementById("textinput").value.trim()

    if (text === "") {
        window.alert("You shave not entered a task")
        return
    }
    const task = {
        id: number++,
        name: text,
        priority: dropdown.value,
        isimportant: checkbox.checked,
        iscomplete: false,
        date: today
    }

    logTasks()
    renderTasks()
    form.reset()
})

function renderTasks() {
    taskContain.innerHTML = ""

    tasks.forEach(task => {
        let reallyimportant = document.createElement("div")
        reallyimportant.className = "task"

        if (task.isimportant) {
            reallyimportant.style.border = "5px red"
            reallyimportant.style.background = "light-red"
        }
        if (reallyimportant.iscomplete) {
            reallyimportant.style.textDecoration = "line-through"
        }

        reallyimportant.innerHTML = `
        <strong>${task.name}</strong>
        <em>(${task.priority})</em><br>
        <small>Added: ${task.date}</small><br>
        <button class = "delete-btn" data-id = "${task.id}">Delete</button>`

        reallyimportant.addEventListener("click", (i) => {
            if (i.target.classList.contains("delete-btn")) {
                deleteTask(task.id)
            } else {
                toggleCompletion(task.id)
            }
        })

        taskContain.appendChild(reallyimportant)
        console.log(reallyimportant)
    })
}

function toggleCompletion(id) {
    let task = tasks.find(t => t.id === id)
    if (task) {
        task.iscomplete = !task.iscomplete
        logTasks()
        renderTasks()
    }
}

function deleteTask(id) {
    task = task.filter( t => t.id !== id)
    logTasks()
    renderTasks()
}

function logTasks() {
    console.log(JSON.stringify(tasks, null, 2))
}