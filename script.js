
function getHumanChoice(){
    let validchoices = ["rock", "paper", "scissors"];
    let input = prompt("Rock, Paper, Scissors?").trim().toLowerCase();
    if (input === "scissor") {
        input = "scissors"
    } 

while(validchoices.indexOf(input) === -1){
    input = prompt("Not quite, try again").trim().toLowerCase();
}
return input

}

function playGame() {

let humanScore = 0
let computerScore = 0

    function playRound(humanChoice,computerChoice){
        let result = (humanChoice+"/"+computerChoice);
        let resultlog = null;

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
                resultlog = `You win! You entered ${humanChoice} and the computer selected ${computerChoice}. 
                The score is now You:${humanScore}, the Robot:${computerScore}.`;
                break;
            case "rock/paper":
            case "scissors/rock":
            case "paper/scissors":
                computerScore ++;
                resultlog = `You lost, you entered ${humanChoice} and the computer selected ${computerChoice}. 
                The score is now You:${humanScore}, the Robot:${computerScore}.`;
                break;
        }

    console.log(resultlog);
    }

    for (let i = 0; i < 4; i++){
        function compLoop(){
        switch(Math.floor(Math.random() * 3)) {
            case 0:
                return compLoop ="rock";
                break;
            case 1:
                return compLoop ="paper";
                break;
            case 2:
                return compLoop ="scissors";
                break;
        }
        }
        console.log(`Round ${i+1} Make your pick`);
        playRound(getHumanChoice(),compLoop());
    }

    console.log(`Game Over. You: ${humanScore}. Computer:${computerScore}`);
}


playGame();