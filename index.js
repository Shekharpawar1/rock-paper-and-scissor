let playerScoreArea=document.querySelector("#playerScore"),
    computerScoreArea=document.querySelector("#computerScore");
let playerScore=0;computerScore=0;
playerScoreArea.textContent=playerScore;
computerScoreArea.textContent=computerScore;

function computerPlay(){
    let selections=["rock","paper","scissor"]
    let compSelection=selections[Math.floor(Math.random()*selections.length)]
    return compSelection
}


function gameRound(playerSelection,computerSelection){
    
if(playerSelection==="rock" && computerSelection==="paper" || playerSelection==="paper" && computerSelection==="scissor"|| playerSelection==="scissor" && computerSelection==="rock") {computerScore=computerScore+1; computerScoreArea.textContent=`${computerScore}`;return computerScore}
    else if(playerSelection==="rock" && computerSelection==="scissor" || playerSelection==="paper" && computerSelection==="rock"|| playerSelection==="scissor" && computerSelection==="paper"){playerScore=playerScore+1;playerScoreArea.textContent=`${playerScore}`;return playerScore}
    else if(playerSelection=== computerSelection) {
        
        // let playerScoreOutput=`${playerScore}`;
        // let computerScoreoutput=`${computerScore}`;
        
    }
    

}
function pageReloading(){
    setTimeout(() => {
        location.reload()
        
    }, 1000);

}
function gameScore(playerScore,computerScore){
    let heading=document.querySelector("h1")
    if(computerScore===5){
        heading.innerText="Computer Won";
        pageReloading()
        
    }
    else if(playerScore ===5){
        heading.innerText="Player Won";
        pageReloading()   }
    else if( playerScore ===5 && computerScore===5){
        heading.innerText=" Game is Tie";
        pageReloading()
    }
    
    
}




let computerSelection=computerPlay();

let selection=document.querySelectorAll("button").forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let playerSelection=e.target.id;
        gameRound(playerSelection,computerSelection);
        gameScore(playerScore,computerScore)
        console.log(playerSelection,computerSelection)
    })
})




