// Good Luck! You got this 💪🏾
// Write your code here.

// 💯💯😎😎

function playGame(player1, player2) {
    if (player1 === player2) {
      return "tie";
    } else if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      return "Player 1 win";
    } else {
      return "Player 2 win";
    }
  }
  console.log(playGame("rock", "paper"));     // Player 2 wins! (Paper beats rock)
  console.log(playGame("scissors", "paper")); // Player 1 wins! (Scissors beats paper)
  console.log(playGame("rock", "rock"));      // tie (Both players chose rock)
  console.log(playGame("scissors", "rock"));  // Player 2 wins
