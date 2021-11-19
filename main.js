

let playerMove ='rock';


let computerMove = 'paper';

if( playerMove === 'rock' && computerMove ==='paper' || playerMove ==='sissors'&& computerMove ==='rock' || playerMove ==='paper'&& computerMove === 'sissors' )
{ console.log('Player loses')} 


else if( playerMove==='paper' && computerMove==='rock' || playerMove === 'rock'&& computerMove ==='sissors' || playerMove ==='scissors'&& computerMove === 'paper')
{console.log('Player wins')}
 else 
 { console.log('Draw')};


function getWinner(player1, player2) {
    // code goes here...
  }
  
  let result = getWinner("rock", "paper");
