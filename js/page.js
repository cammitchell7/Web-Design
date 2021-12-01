var playerScore = 0;
var compScore = 0;
var ties = 0;

function compChoice() {
  var rnd = Math.random();
  if(rnd < .334){
    rnd = 0;    // 0 will represent rock
    document.getElementById('o-img').src = "svg/rock.svg";
  }
  else if (rnd > .334 && rnd < .667){
    rnd = 1;    // 1 will represent paper
    document.getElementById('o-img').src = "svg/paper.svg";
  }
  else{
    rnd = 2;    // 2 will represent scissors
    document.getElementById('o-img').src = "svg/scissors.svg";
  }
  return rnd;
}

function choice(player) {
  var comp = compChoice();
  if(player === comp){
    document.getElementById('result').innerHTML = "It's a Tie!";
    ties += 1;
    document.getElementById('tscore').innerHTML = ties;
  }
  else if(player === 0){
    if(comp === 1){
      document.getElementById('result').innerHTML = "Paper Wins!";
      compScore += 1;
      document.getElementById('oscore').innerHTML = compScore;
    }
    else {
      document.getElementById('result').innerHTML = "Rock Wins!";
      playerScore += 1;
      document.getElementById('pscore').innerHTML = playerScore;
    }
  }
  else if(player === 1){
    if(comp === 0){
      document.getElementById('result').innerHTML = "Paper Wins!";
      playerScore += 1;
      document.getElementById('pscore').innerHTML = playerScore;
    }
    else {
      document.getElementById('result').innerHTML = "Scissors Wins!";
      compScore += 1;
      document.getElementById('oscore').innerHTML = compScore;
    }
  }
  else if(player === 2){
    if(comp === 0){
      document.getElementById('result').innerHTML = "Rock Wins!";
      compScore += 1;
      document.getElementById('oscore').innerHTML = compScore;
    }
    else {
      document.getElementById('result').innerHTML = "Scissors Wins!";
      playerScore += 1;
      document.getElementById('pscore').innerHTML = playerScore;
    }
  }
}
