function computerPlay(){
    let selection=["rock","paper","scissor"]
    let compSelection=selection[Math.floor(Math.random()*selection.length)]
    return compSelection
}


function gameRound(playerSelection,computerSelection){
    // if(playerSelection==="rock"){
    //     if(computerSelection ==="rock") return "tie"
    //     else if(computerSelection==="paper") return "computer won"
    //     else if(computerSelection==="scissor") return "paper won"
    // }
    // else if(playerSelection==="paper"){
    //     if(computerSelection ==="paper") return "tie"
    //     else if(computerSelection==="scissor") return "computer won"
    //     else if(computerSelection==="rock") return "paper won"
    // }
    // else if(playerSelection==="scissor"){
    //     if(computerSelection ==="scissor") return "tie"
    //     else if(computerSelection==="rock") return "computer won"
    //     else if(computerSelection==="paper") return "paper won"
    // }
    
}








let playerSelection=prompt("enter your selection")
console.log(`player selection ${playerSelection} `)
let computerSelection=computerPlay()

console.log(gameRound(playerSelection,computerSelection))