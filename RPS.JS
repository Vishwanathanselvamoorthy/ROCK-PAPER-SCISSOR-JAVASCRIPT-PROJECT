function RPS(){



let playGame=confirm("Shall We Start Playing ROCK , PAPER Or SCISSORS ? ");


if(playGame){

    let playerChoice=prompt("Please Enter ROCK , PAPER Or SCISSORS.(UPPERCASE ONLY)")

    if(playerChoice){

        let playerOne=playerChoice.trim();

        if(playerOne==="ROCK" || playerOne==="PAPER" || playerOne==="SCISSORS"){

            let computerChoice=Math.floor(Math.random()*3+1);

            let computer = computerChoice===1 ? "ROCK" :

                           computerChoice===2 ? "PAPER": "SCISSORS";




            let result= playerOne===computer ? "MATCH TIED":

                        playerOne==="ROCK"  && computer==="PAPER" ? `playerOne: ${playerOne}\nComputer:${computer}\nCOMPUTER WINS !!!`:

                        
                        playerOne==="PAPER"  && computer==="SCISSORS" ? `playerOne: ${playerOne}\nComputer:${computer}\nCOMPUTER WINS !!!`:
                        
                        playerOne==="SCISSORS"  && computer==="ROCK" ? `playerOne: ${playerOne}\nComputer:${computer}\nCOMPUTER WINS !!!`: 
                        
                        `playerOne: ${playerOne}\nComputer:${computer}\nPLAYER WINS !!!`
           
           
        alert(result); 

           let playAgain=confirm("Play Again ?");

           playAgain?location.reload() : alert("OK , THANKS FOR PLAYING.");
                            
        }else{

            alert("UPPERCAE ONLY !!!");

            location.reload()

        }
    }

    else{

      alert("I Guess You Changed Your Mind. Maybe Next Time.");
    
    }

}else{
    
    alert("OK , Maybe Next Time.");

}
}