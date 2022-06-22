// increment the count when the buttom is cliked
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0
function increment() {
    count += 1
    countEl.innerText = count

}



function Saving() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0



}

