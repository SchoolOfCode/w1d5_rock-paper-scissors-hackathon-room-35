
let playerMove = "rock";
let computerMove = "paper";


function getWinner(playerMove,computerMove){
 console.log( playerMove)   
if(playerMove === "rock" && computerMove === "paper" || playerMove === "scissors" && computerMove === "rock" || playerMove === "paper" && computerMove === "scissors")
      {return -1}
   else if (playerMove === "paper" && computerMove === "rock" || playerMove === "rock" && computerMove === "scissors" || playerMove === "scissors" && computerMove === "paper")
    {return 1}
    else {return 0}
  };
  
  let result = getWinner(playerMove,computerMove);
  