const initGame=()=>{

    const startGame=confirm("Shall We Play Rock , Paper or Scissors ? ");

    startGame ? playGame() : alert("Ok , MayBe Next Time.");

};

const playGame=()=>{

    while(true){

        let playerChoice=getPlayerChoice();

        playerChoice = formatPlayerChoice(playerChoice);

        if(playerChoice===""){

            invalidChoice();

            continue;
        }

        if(!playerChoice){

            decidedNotToPlay();

            break;
        }

        playerChoice=evaluatePlayerChoice(playerChoice);

        if(!playerChoice){

            invalidChoice();

            continue;

        }

        const computerChoice = getComputerChoice();

        const result = determineWinner(playerChoice,computerChoice);

        displayResult(result);

        if(askToPlayAgain()){

            continue;
        }
        else{

            thanksForPlaying();

            break;
        }

    }
};

const getPlayerChoice = ()=>{

    return prompt("Please Enter Rock , Paper or Scissors");
};

const formatPlayerChoice=(playerChoice)=>{

    if(playerChoice || playerChoice===""){

        return playerChoice.trim().toLowerCase();

    }
    else{

        return false;
    }



};

const invalidChoice=()=>{

    alert("You Didn't Enter Rock , Paper or Scissors");
};

const decidedNotToPlay=()=>{

    alert("I Guess You Changed Your Mind . May Be Next Time.");
}

const evaluatePlayerChoice = (playerChoice) =>{

    if(playerChoice==="rock" ||

       playerChoice==="paper"||

       playerChoice==="scissors"){

        return playerChoice;

       }

       else{

        return false;

       }
};



const getComputerChoice = () =>{

    const randomNumber = Math.floor(Math.random()*3);

    const rpsArray=["rock","paper","scissors"];

    return rpsArray[randomNumber];
};

const determineWinner=(player,computer)=>{

    const winner = player === computer ? "Tie Game !"
                   
                   :player === "rock" && computer === "paper" 
                   ? `player : ${player}\ncomputer : ${computer}\nComputer Wins !`

                   :player === "paper" && computer === "scissors"
                   ? `player : ${player}\ncomputer : ${computer}\nComputer Wins !`

                   :player ==="scissors" && computer === "rock"
                   ? `player : ${player}\ncomputer : ${computer}\nComputer Wins !`
                   
                   :`player : ${player}\ncomputer :${computer}\nPlayer Wins`;

                   return winner;




};

const displayResult = (result)=>{

    alert(result);
};

const askToPlayAgain = ()=>{

    return confirm("Play Again ?");
}

const thanksForPlaying = ()=>{

    alert("OK , Thanks For Playing.");
};

initGame();