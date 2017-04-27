function tic_tac_toe_board () {
  let ticTac = []
  for(let i = 0; i < 3; i++) {
    ticTac[i] = [];
    for(let j = 0; j < 3; j++) {
      let acak = Math.round(Math.random());
      if(acak == 0) ticTac[i].push('x');
      if(acak == 1) ticTac[i].push('o');
    }
  }

  let ticTacRapi = []
  let hitungX = 0;
  let hitungO = 0;
  for(let i = 0; i < 3; i++) {
    ticTacRapi[i] = [];
    while(ticTacRapi[i].length < 3) {
      let acak = Math.round(Math.random());
      if(acak == 0 && hitungX < 5) {
        ticTacRapi[i].push('x');
        hitungX++;
      }
      if(acak == 1 && hitungO < 5) {
        ticTacRapi[i].push('o');
        hitungO++;
      }
    }
  }
  return ticTacRapi;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
