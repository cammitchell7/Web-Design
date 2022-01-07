sessionStorage.setItem("playerScore", 0);
sessionStorage.setItem("compScore", 0);
sessionStorage.setItem("ties", 0);

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
    sessionStorage.setItem("ties", parseInt(sessionStorage.getItem("ties")) + 1);
    document.getElementById('tscore').innerHTML = sessionStorage.getItem("ties");
  }
  else if(player === 0){
    if(comp === 1){
      document.getElementById('result').innerHTML = "Paper Wins!";
      sessionStorage.setItem("compScore", parseInt(sessionStorage.getItem("compScore")) + 1);
      document.getElementById('oscore').innerHTML = sessionStorage.getItem("compScore");
    }
    else {
      document.getElementById('result').innerHTML = "Rock Wins!";
      sessionStorage.setItem("playerScore", parseInt(sessionStorage.getItem("playerScore")) + 1);
      document.getElementById('pscore').innerHTML = sessionStorage.getItem("playerScore");
    }
  }
  else if(player === 1){
    if(comp === 0){
      document.getElementById('result').innerHTML = "Paper Wins!";
      sessionStorage.setItem("playerScore", parseInt(sessionStorage.getItem("playerScore")) + 1);
      document.getElementById('pscore').innerHTML = sessionStorage.getItem("playerScore");
    }
    else {
      document.getElementById('result').innerHTML = "Scissors Wins!";
      sessionStorage.setItem("compScore", parseInt(sessionStorage.getItem("compScore")) + 1);
      document.getElementById('oscore').innerHTML = sessionStorage.getItem("compScore");
    }
  }
  else if(player === 2){
    if(comp === 0){
      document.getElementById('result').innerHTML = "Rock Wins!";
      sessionStorage.setItem("compScore", parseInt(sessionStorage.getItem("compScore")) + 1);
      document.getElementById('oscore').innerHTML = sessionStorage.getItem("compScore");
    }
    else {
      document.getElementById('result').innerHTML = "Scissors Wins!";
      sessionStorage.setItem("playerScore", parseInt(sessionStorage.getItem("playerScore")) + 1);
      document.getElementById('pscore').innerHTML = sessionStorage.getItem("playerScore");
    }
  }
}
