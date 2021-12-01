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
    document.getElementById('result').innerHTML = "It's a Tie!"
  }

}
