
const button3 = document.getElementById('button3')

button3.onclick = () => buttonClick("button3")

const button4 = document.getElementById('button4')

//button4.addEventListener('click', () => buttonClick("button4"))

button4.addEventListener('mousedown', countClicks) //with addEventListener we can do more functions on the same event

document.addEventListener('keydown', changeBackground)

const parPippo = document.getElementById('par-pippo')
parPippo.addEventListener('click', countClicks)

const link = document.getElementById('link')
link.addEventListener('click', displayPar)

function buttonClick(element) {
    console.log(element);
}

let counter = 0;

function countClicks(event) {
    counter++
    console.log(counter);
    if (counter === 7) {
        button4.removeEventListener('click', countClicks)  //individually remove event
    }
    // event.stopPropagation()  //this is to only let you do that on one event, instead of clicking nested things and getting it twice
    event.preventDefault()      //this is for preventing the original purpose, like in the case of the link
    // window.location = "https://google.com" //other way to send to link
}


function displayPar(event) {
    let par = document.getElementById('hidden-par')
    par.style.display = 'block'  //shows it from display none
    event.preventDefault()
}

function changeBackground(event) {
    let num = parseInt(event.key)
    if (event.ctrlKey && !isNaN(num)) {
        event.preventDefault()
        document.body.style.backgroundColor = '#' + num + num + num + num + num + num + num + num
    }
}