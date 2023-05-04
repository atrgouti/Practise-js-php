'use strict';


const check = document.querySelector(".check")
const again = document.querySelector(".again")
const input = document.querySelector(".guess")
const score = document.querySelector(".score")
const number = document.querySelector(".number")
const highscore = document.querySelector(".highscore")
let copmuterGuess;


function onstartGame(){
    input.value = ''
    number.textContent = "?"
    document.body.style.backgroundColor = "#222"
    copmuterGuess = Math.floor(Math.random() * 20) + 1
    score.textContent = 20
}

function ongame(){
    if(input.value > copmuterGuess){
        input.value = ''
        number.textContent = "Low"
        score.textContent = score.textContent - 1
    }else if(input.value < copmuterGuess){
        input.value = ''
        number.textContent = "High"
        score.textContent = score.textContent - 1
    }else{
        input.value = ''
        number.textContent = "You Win"
        document.body.style.backgroundColor = "Green"
        highscore.textContent = score.textContent
    }
}




onstartGame()
check.addEventListener("click", ongame)
again.addEventListener("click", onstartGame)