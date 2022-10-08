let chomeEl = document.getElementById("chome-el")

let count = 0

function add1() {
    count += 1
    chomeEl.innerText = count;
}

function add2() {
    count += 2
    chomeEl.innerText = count;
}

function add3() {
    count += 3
    chomeEl.innerText = count;
}


// this is for away

let chomEl = document.getElementById("chom-el")

let coun = 0
function add4() {
    coun += 1
    chomEl.textContent = coun;
}

function add5() {
    coun += 2
    chomEl.textContent = coun;
}

function add6() {
    coun += 3
    chomEl.textContent = coun;
}
// save-button


// home score
let saveEl = document.getElementById("save-el")

function sav() {
 let savStr = count + " - "
 saveEl.textContent += savStr
 chomeEl.textContent = 0
 count = 0
}

// Away score

let savEl = document.getElementById("save-el")

function save() {
    let savStr = coun + " - "
    saveEl.textContent += savStr
    chomEl.textContent = 0
    coun = 0
}