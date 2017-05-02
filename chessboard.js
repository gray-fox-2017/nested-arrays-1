'use strict'

const makeChessboard = () => {
  let baris_belakang = ['rook','knight','bishop','queen','king','bishop','knight','rook'];
  let chessboard = [];

  for(let i=0; i<baris_belakang.length; i++){
    if(i==0){
      chessboard.push([]);
      for(let j=0; j<baris_belakang.length; j++){
        chessboard[i].push('black '+baris_belakang[j]);
      }
    }else if(i==1){
      chessboard.push([]);
      for(let j=0; j<baris_belakang.length; j++){
        chessboard[i].push('black pawn');
      }

    }else if(i==6){
      chessboard.push([]);
      for(let j=0; j<baris_belakang.length; j++){
        chessboard[i].push('white pawn');
      }
    }else if(i==7){
      chessboard.push([]);
      for(let j=0; j<baris_belakang.length; j++){
        chessboard[i].push('white '+baris_belakang[j]);
      }
    }else {
      chessboard.push([]);
      for (let j = 0; j < baris_belakang.length; j++) {
        chessboard[i].push('space');
      }
    }
  }
  return chessboard;
}

const printBoard = board => {
  // console.log(board);
  for(let i=0; i<board.length; i++){
    console.log(board[i].join(','))
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
