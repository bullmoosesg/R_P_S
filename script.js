const rock = document.querySelector('#rock');
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const para = document.querySelector("#feedback");
const table = document.querySelector("table");
let humanScore = 0;
let computerScore = 0;
let round = 0;
const usrButtons = document.querySelectorAll(".selection");
const reset = document.querySelector("#reset");
const logs = document.querySelector("tbody");


reset.addEventListener("click", ()=>{
    humanScore = computerScore  = 0;
    round = 0;
    logs.innerHTML = '';
    para.innerHTML= "Clean Slate! Its 0:0"
    

})

usrButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        playRound(button.id)
    })
})


   function compLoop(){
         switch(Math.floor(Math.random() * 3)) {
               case 0:
                   return "rock";
                   break;
                case 1:
                   return "paper";
                   break;
                case 2:
                   return "scissors";
                   break;
         };
        };

    function playRound(humanChoice){
        let computerChoice = compLoop();
        let result = (humanChoice+"/"+computerChoice);
        let resultlog = null;
        let winnerText = ''
    
        switch(result){
            case "paper/paper":
            case "rock/rock":
            case "scissors/scissors":
                resultlog=`Its a Tie. You entered ${humanChoice} and the computer selected ${computerChoice}`;
                break;
            case "paper/rock":
            case "rock/scissors":
            case "scissors/paper":
                humanScore ++;
                winnerText = "You";
                round ++;
                resultlog = `You win! You entered ${humanChoice} and the computer selected ${computerChoice}.`;
                break;
            case "rock/paper":
            case "scissors/rock":
            case "paper/scissors":
                computerScore ++;
                winnerText = " the computer";
                round ++;
                resultlog = `You lost, you entered ${humanChoice} and the computer selected ${computerChoice}.`;
                break;
        }
    
        if(computerChoice != humanChoice){
            let row = table.insertRow(-1);
            row.setAttribute("class","logs");
            let rnd = row.insertCell(0);
            let humanCH = row.insertCell(1);
            let compCH = row.insertCell(2);
            let winner = row.insertCell(3);
            let score = row.insertCell(4);
            rnd.innerHTML = round;
            compCH.innerHTML = computerChoice;
            humanCH.innerHTML = humanChoice;
            score.innerHTML = `${humanScore} : ${computerScore}`;
            winner.innerHTML = winnerText;
        };

        if(round == 5){
            para.innerHTML = `And that's the game, the winner was ${winnerText} with a score of ${Math.max(computerScore,humanScore)}. Click the reset botton to play again.`
        } else{
        para.innerHTML = resultlog;
        };
    
    };




