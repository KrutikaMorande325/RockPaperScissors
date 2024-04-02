let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

//Here we have distributed our work in various functions and can be called various times and this form is called as MODULAR FORM where work work is distributed in the form of module


//To generate random choice we use Math class with menthod called ramdom and we will multiply with such number so that we get index number one less than the multiplyed number for example we want index no upto 5 then we will multiply it with 6. but we will get decimal no so we will use a function called Math.floor()
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
// console.log("It's a draw.");
msg.innerText = "Game Was Draw. Play Again!";
msg.style.backgroundColor = "rgb(22, 22, 83) ";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
    //   console.log("You win.");
      userScore++;
      userScorepara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "Green";
    }else{
    //   console.log("You lose");
      compScore++;
      compScorepara.innerText = compScore;
      msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  
  };

const playGame = (userChoice) => {
  //Generate computer choice

// console.log("User choice = ",userChoice);
       const compChoice = genCompChoice();
    //    console.log("Comp choice = ",compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  }
  else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        // showWinner(userWin, userChoice, compChoice);
        showWinner(userWin, userChoice, compChoice);
      }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});