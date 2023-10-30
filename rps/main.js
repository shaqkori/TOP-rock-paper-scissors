const playerText = document.querySelector("#playerText");
const computerText=  document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const Choice = document.querySelectorAll(".choice");
let player;
let computer;
let result; 


choiceBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;

  computerTurn();
  playerText.textContent = `Player: ${player}`
  computerText.textContent = `Computer: ${computer}`
  resultText.textContent = checkWinner();
  

}))

function computerTurn(){
  const randnum = Math.floor(Math.random()*3)+1;
  switch (randnum){
    case 1 :
      computer = "Rock";
      break;
    case 2 :
      computer = "Paper";
      break;
    case 3 :
      computer = "Scissors";
      break;
  }
}

function checkWinner () {
  if (player == computer) {
    return "draw";
  }
  else if (computer === "Rock"){
   return(player === "Paper") ? "you win" : "you lose";

  }

  else if (computer === "Paper"){
  return(player === "Scissors") ? "you win" : "you lose";

  }

  else if (computer === "Scissors"){
    return player == "Rock" ? "you win" : "you lose";

  }

  
}


let score = '';

let number = Math.floor(Math.random()*3)+1;
switch (number) {
  case 1:
    score = "bad";
    break;
  case 2: 
    score = "good";
    break;
  case 3: 
    score = "decent";
    break;


}

console.log(number)

const scoreRating =
  score === "good"?  "Excellent" : "Do better"

console.log(scoreRating)

let user = "";
let AI = "";
let roundwinner = "";




/*
switch (user){
  case 1:
    user = "rock"
    break;
  case 2:
    user = "paper"
  case 3:
    user = "scissors"
}
*/


function aI (){
let AIchoice = Math.floor(Math.random()*3)+1;
switch (AIchoice){
  case 1:
    AI = "rock"
    break;
  case 2:
    AI = "paper"
  case 3:
    AI = "scissors"
}
}

console.log(AI);

console.log(user)



function winner (){
  if (user == AI){
    return("draw")
  }

  else if (AI == "rock"){
   return(user == " paper") ? "you win" : "you lose";

  }

  else if ((AI == "paper")){
    return(user == "scissors") ? "you win" : "you lose";

  }

  else if (AI == "scissors"){
    return(user == "rock") ? "you win" : "you lose";


  }
}

Choice.forEach(button => button.addEventListener("click", () => {

  user = button.textContent

  console.log(user);
  
let AIchoice = Math.floor(Math.random()*3)+1;
switch (AIchoice){
  case 1:
    AI = "rock"
    break;
  case 2:
    AI = "paper"
  case 3:
    AI = "scissors"
}

  console.log(AI);



 console.log(winner());

  

 
 

}))