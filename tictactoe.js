function tic_tac_toe_board () {
  let chooser = Math.ceil(Math.random()*2);
  let X = 0;
  let Y = 0;
  let tampung = [];
  let board = [];
  let stop = false;

  if (chooser === 1){
    X = 4;
    Y = 5;
  } else if (chooser === 2){
    X = 5;
    Y = 4;
  }

  while (stop === false){
    let X_or_Y = Math.ceil(Math.random()*2);
    if (X_or_Y === 1 && X > 0){
      tampung.push("X");
      X--;
    } else if (X_or_Y === 2 && Y > 0){
      tampung.push("Y");
      Y--;
    } else if (X == 0 && Y == 0){
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
