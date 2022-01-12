function computerPlay(){
    let selection=["rock","paper","scissor"]
    let compSelection=selection[Math.floor(Math.random()*selection.length)]
    return compSelection
}

let playerScore=0;computerScore=0;
function gameRound(playerSelection,computerSelection){
    
    if(playerSelection==="rock" && computerSelection==="paper" || playerSelection==="paper" && computerSelection==="scissor"|| playerSelection==="scissor" && computerSelection==="rock") {computerScore++ ;return `computer score ${computerScore}`}
    else if(playerSelection==="rock" && computerSelection==="scissor" || playerSelection==="paper" && computerSelection==="rock"|| playerSelection==="scissor" && computerSelection==="paper"){playerScore++ ;return `player score ${playerScore}`}
    else if(playerSelection=== computerSelection) return "tie"

}








let playerSelection=prompt("enter your selection")

let computerSelection=computerPlay()

console.log(gameRound(playerSelection,computerSelection))