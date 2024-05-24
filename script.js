
let itemNumber = document.getElementById("number")
let saveItem = document.getElementById("entries")
let count = 0

function increment(){
    count += 1
    itemNumber.textContent = count
    console.log(count)
}

function save(){
    newCount = count + " - "
    saveItem.textContent += newCount
    itemNumber.textContent = 0
    count = 0

}