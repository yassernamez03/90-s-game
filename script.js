const ball = document.querySelector('#ball')
const floor = document.querySelector('#floor')
const scorebar = document.querySelector('#scorebar')
const replay = document.querySelector('#replay')
const p = document.querySelector('.dead')
    //varieble
var score = 0;
var bx = Math.floor(Math.random() * 470)
var by = 0
var rx = 0
    //fonctions
function moveball() {
    if (by < 557) {
        by += 2
        ball.style.left = `${bx}px`
        ball.style.top = `${by}px`
        if (bx + 45 > rx && rx > bx - 45 && by == 528) {
            score += 1;
            ball.style.left = `${bx}px`
            ball.style.top = `${by}px`
            by = 0
            bx = Math.floor(Math.random() * 470)
        }
        scorebar.innerHTML = `${score}`;
    }
    if (by > 557) {
        replay.classList.add('rep')
        p.textContent = `Your score is ${score}`;
        clearInterval(interval)
    }
}

function movefloor(e) {
    if (e.keyCode == 39 && rx < 470) {
        rx += 10
    }
    if (e.keyCode == 37 && rx > 0) {
        rx -= 10
    }
    floor.style.left = `${rx}px`
}
//reLTIME
window.addEventListener('keydown', movefloor)
const interval = setInterval(moveball, 10)
replay.addEventListener('click', e => {
    document.location.reload()
})