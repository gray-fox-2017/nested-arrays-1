function tic_tac_toe_board () {
  let chooser = Math.ceil(Math.random()*2);
  let X = 0;
  let O = 0;
  let tampung = [];
  let board = [];
  let stop = false;

  if (chooser === 1){
    X = 4;
    O = 5;
  } else if (chooser === 2){
    X = 5;
    O = 4;
  }

  while (stop === false){
    let X_or_O = Math.ceil(Math.random()*2);
    if (X_or_O === 1 && X > 0){
      tampung.push("X");
      X--;
    } else if (X_or_O === 2 && O > 0){
      tampung.push("O");
      O--;
    } else if (X == 0 && O == 0){
      stop = true
    }
  }

  while (tampung.length > 0){
    board.push(tampung.splice(0,3));
    board.push('--------------');
  }

  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
