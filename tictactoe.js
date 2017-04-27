function tic_tac_toe_board () {
  var board = []
  var xTotal = 0;
  var oTotal = 0;
  for (var i=0; i<3; i++){
    board.push([]);
    for(var j=0; j<3; j++){
      randomNum = Math.round(Math.random());
      if(randomNum==1){
        if(xTotal<4){
          board[i].push('x');
          xTotal += 1;
        } else {
          board[i].push('o');
          oTotal += 1;
        }
      } else {
        if(oTotal<4){
          board[i].push('o');
          oTotal += 1;
        } else {
          board[i].push('x');
          xTotal += 1;
        }
      }
    }
  }
  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
