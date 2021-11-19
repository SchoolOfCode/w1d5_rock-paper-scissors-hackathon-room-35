
let playerMove = prompt('What is your move?');
let computerMove = Math.random();


function getWinner(playerMove,computerMove){
 console.log( playerMove)   
if(playerMove === "rock" && computerMove === "paper" || playerMove === "scissors" && computerMove === "rock" || playerMove === "paper" && computerMove === "scissors")
      {return -1}
   else if (playerMove === "paper" && computerMove === "rock" || playerMove === "rock" && computerMove === "scissors" || playerMove === "scissors" && computerMove === "paper")
    {return 1}
    else {return 0}
  };
  
  let result = getWinner(playerMove,computerMove);

  alert(result)

 /function computerchoice (computerMove){

      if (Math.random() < 0.34){ return 'rock'} 
     else if (Math.random () <=0.64){return 'paper'}
     else {return 'sissors'}
  };
  let computer = computerchoice(computerMove);
console.log ( computer);