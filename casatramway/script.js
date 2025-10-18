let count = 0;
let countEl = document.getElementById("count")
let saveEl = document.getElementById("saved-entries")
let outputEl = document.getElementById("output")

function increment() {
    count ++;
    countEl.innerText = count;
}


let first_save = true;
function save() {
    if (count == 0) {
        alert("You need to add more people.")
    }
    else {
        if (getComputedStyle(outputEl).visibility == "hidden"){
        outputEl.style.visibility = "visible"
    }
    if (first_save) {
        dash = ""
        first_save = false
    }
    saveEl.textContent += dash + count;
    count = 0;
    countEl.textContent = count;
    dash = " - "
    }
}
