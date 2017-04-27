function tic_tac_toe_board () {
  var hitX = 0;
  var hitO = 0;
  // ...
  var board = [];
  for (let i = 0; i<3; i++) {
    board.push(["","",""]);
  }
  for (let j=0; j<3; j++) {
    for (let k=0; k<3; k++) {
      var ran = Math.floor(Math.random()*2);
      // console.log(ran);
      if (ran == 0) {
        if (hitX < 5) {
          board[j][k] = "X";
          hitX++;
        } else {
          board[j][k] = "O";
        }
      } else {
        if (hitO < 5) {
          board[j][k] = "O";
          hitO++;
        } else {
          board[j][k] = "X";
        }
      }
    }
  }
  return board;
}


console.log(tic_tac_toe_board()) // => make a random tic tic board
