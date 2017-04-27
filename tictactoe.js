function tic_tac_toe_board () {
  // ...
  let papan = [];
  let data = 3;
  let countX = 0;
  let countO = 0;

  for (let i=0; i<data; i++) {
    //make a board
    papan.push([]);
    for (let j=0; j<data; j++) {
      let x1 = Math.floor(Math.random()*2);
      if (j===0) {
            if (x1 === 0 && countX <5 ) {
              papan[i].push("X");
              countX++;
            } else {
              papan[i].push("O");
              countO++;
            }
      } else if (j===1) {
            if(x1 ===0 && countX <5) {
              papan[i].push("X");
              countX++;
            } else {
              papan[i].push("O");
              countO++;
            }
      } else if (j===2) {
            if(x1 ===0 && countX <5) {
              papan[i].push("X");
              countX++;
            } else {
              papan[i].push("O");
              countO++;
            }
      }
    }


  }
  return papan;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
