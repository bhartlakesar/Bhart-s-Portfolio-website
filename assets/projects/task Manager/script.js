let addTask = document.querySelector(".addTask")
let popup = document.querySelector(".popup")
let blurBg = document.querySelector(".blurBg")
let cancelPopup = document.querySelector(".cancelTaskBtn")
let input = document.querySelector("#task")
let addTaskBtn = document.querySelector(".addTaskBtn")
let taskList = document.querySelector(".taskList")


// Saved tasks ko localStorage se lena
let tasks = JSON.parse(localStorage.getItem("tasks")) || []


// Page load hote hi saved tasks show karna
tasks.forEach((task) => {
    createTask(task)
})


// Add Task popup open
addTask.addEventListener("click", () => {

    popup.style.display = "flex"
    blurBg.style.display = "block"

    input.focus()

})


// Cancel button
cancelPopup.addEventListener("click", () => {

    popup.style.display = "none"
    blurBg.style.display = "none"

})


// Task create karne ka function
function createTask(task) {

    let taskItem = document.createElement("div")

    taskItem.className = "taskContainer"

    taskItem.innerHTML = `
        <input class="check" type="checkbox">

        <span class="taskText">${task}</span>

        <button class="removeBtn">
            <i class="fa-solid fa-trash"></i>
            Remove
        </button>
    `

    taskList.append(taskItem)


    // Remove button select
    let removeBtn = taskItem.querySelector(".removeBtn")


    removeBtn.addEventListener("click", () => {

        taskItem.remove()

        // Task ko array se remove karna
        tasks = tasks.filter((item) => item !== task)

        // Updated array ko localStorage me save karna
        localStorage.setItem("tasks", JSON.stringify(tasks))

    })

}


// New task add karne ka function
function addNewTask() {

    let task = input.value.trim()


    // Empty task ko prevent karna
    if (task === "") {
        return
    }


    // Array me task add karna
    tasks.push(task)


    // localStorage me save karna
    localStorage.setItem("tasks", JSON.stringify(tasks))


    // Screen par task create karna
    createTask(task)


    // Input clear
    input.value = ""


    // Popup close
    popup.style.display = "none"
    blurBg.style.display = "none"

}


// Add Task button
addTaskBtn.addEventListener("click", () => {

    addNewTask()

})


// Enter key
input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        addNewTask()

    }

})