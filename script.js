let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");

const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");

const paper_div = document.getElementById("p");
const scisscors_div = document.getElementById("s");

const p1 = document.querySelector(".result > p");

var l = "";
const a = ["rock", "paper", "scissors"];

rock_div.addEventListener("click", () => {
  let a1 = a[Math.floor(Math.random() * a.length)];

  if (a1 == "rock") {
    userScore = userScore + 1;
    computerScore = computerScore + 1;

    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    p1.textContent = "Machine also Choosed Rock!! Its a tie!!";
  }
  if (a1 == "paper") {
    userScore = userScore + 1;
    computerScore = computerScore;

    userScore_span.textContent = userScore;
    p1.textContent = "Machine Choosed Paper!! You Loose!!";
  }
  if (a1 == "scissors") {
    computerScore = computerScore + 1;

    computerScore_span.textContent = computerScore;
    p1.textContent = "Machine Choosed Scissors!! You Win!!";
  }
});
paper_div.addEventListener("click", () => {
  let a1 = a[Math.floor(Math.random() * a.length)];

  p1.textContent = "";
  if (a1 == "rock") {
    userScore = userScore + 1;

    userScore_span.textContent = userScore;
    p1.textContent = "Machine Choosed Rock!! You Win!!";
  }
  if (a1 == "paper") {
    userScore = userScore + 1;
    computerScore = computerScore + 1;

    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    p1.textContent = "Machine also Choosed Paper!! Its a tie!!";
  }
  if (a1 == "scissors") {
    computerScore = computerScore + 1;

    computerScore_span.textContent = computerScore;
    p1.textContent = "Machine Choosed Scissors!! You loose!!";
  }
});

scisscors_div.addEventListener("click", () => {
  let a1 = a[Math.floor(Math.random() * a.length)];
  if (a1 == "rock") {
    userScore = userScore + 1;

    userScore_span.textContent = userScore;
    p1.textContent = "Machine Choosed Rock!! You Loose!!";
  }
  if (a1 == "paper") {
    computerScore = computerScore + 1;

    computerScore_span.textContent = computerScore;
    p1.textContent = "Machine Choosed Paper!! You Win!!";
  }
  if (a1 == "scissors") {
    userScore = userScore + 1;
    computerScore = computerScore + 1;

    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    p1.textContent = "Machine also Choosed Scissors!! You tie!!";
  }
});
