
let playerMove = prompt('What is your move?');
let computerChoice =['rock', 'paper', 'sissors'];
let computerMove = computerMove1();

function computerMove1 ( computerChoice){

  let move = Math.floor(Math.random()*3)
  if (move === 0) {return 'rock'}
  else if (move === 1) {return 'paper'}
  else  {return 'siccors'};
}
console.log (computerMove);



function getWinner(playerMove,computerMove){
console.log( playerMove)
if(playerMove === "rock" && computerMove === "paper" || playerMove === "scissors" && computerMove === "rock" || playerMove === "paper" && computerMove === "scissors")
     {return -1}
   else if (playerMove === "paper" && computerMove === "rock" || playerMove === "rock" && computerMove === "scissors" || playerMove === "scissors" && computerMove === "paper")
    {return 1}
    else {return 0}
  };
  
  //comfirm =('Would you like to play?');
 //while(confirm=true){
  let result = getWinner(playerMove,computerMove);

  alert(result)

 


