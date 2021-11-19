
let playerMove = "rock";
let computerMove = "paper";

if (playerMove === "rock" && computerMove === "paper" || playerMove === "scissors" && computerMove === "rock" || playerMove === "paper" && computerMove === "scissors"){
    console.log("Player Loses");
}else if (playerMove === "paper" && computerMove === "rock" || playerMove === "rock" && computerMove === "scissors" || playerMove === "scissors" && computerMove === "paper"){
    console.log("Player Wins");
}else{
    console.log("It's a draw")
}
