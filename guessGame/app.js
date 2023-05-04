'use strict';


const check = document.querySelector(".check")
const again = document.querySelector(".again")
const input = document.querySelector(".guess")
const score = document.querySelector(".score")
let copmuterGuess;


function onstartGame(){
    input.value = ''
    copmuterGuess = Math.floor(Math.random() * 20) + 1
    score.textContent = 20
}

function ongame(){
    const input = document.querySelector(".guess")
}




onstartGame()
check.addEventListener("click", ongame)
again.addEventListener("click", onstartGame)