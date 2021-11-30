function compChoice() {
  var rnd = Math.random();
  if(rnd < .334){
    rnd = 0;    // 0 will represent rock
  }
  else if (rnd > .334 && rnd < .667){
    rnd = 1;    // 1 will represent paper
  }
  else{
    rnd = 2;    // 2 will represent scissors
  }

  document.getElementById('result').innerHTML = rnd;
}
