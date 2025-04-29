let submit = document.getElementById("submitButton")
let text = document.getElementById("textinput").value
let dropdown = document.getElementById("dropdown")
let tasks = `[]`
let number = 0


submit.onclick = function() {
    number = number + 1
    const task = `{
        "task": "${text}",
        "importance": "${dropdown}"
        }`
    document.body.append(tasks)
    console.log(document.getElementById('textinput').value, number)
    console.log(task)
}
