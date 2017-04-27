function tic_tac_toe_board () {
  // ...
  let board = [];
  let length_board = 3;
  let Ow = (Math.round(Math.random()) === 0) ? 5:4;
  let eX = 9-Ow;
  for (let i=0; i<length_board; i++){
    board.push([]);
    for (let j=0; j<length_board; j++){
      if(Math.round(Math.random())===0){
        value = Ow > 0 ? 'O' : 'X';
        Ow--;
      }else {
        value = eX > 0 ? 'X' : 'O';
        eX--;
      }
      board[i].push(value);
    }
  }
  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
