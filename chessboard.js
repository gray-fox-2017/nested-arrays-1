'use strict'
var pieces = ['Bidak', 'Benteng', 'Kuda', 'Gajah', 'Menteri', 'Raja'];
var side = ['Hitam', 'Putih'];

const makeChessboard = () => {
  let chessBoard = []
  for(let i = 0; i < 8; i++) {
    chessBoard[i] = [];
    for(let j = 0; j < 8; j++) {
      chessBoard[i].push('');
    }
  }

  for(let j = 0; j < 2; j++) {
    let letakBidak = j + 1;
    let letakPerwira = j;
    if(j == 1) {
      letakBidak = 6;
      letakPerwira = 7;
    }
    for(let i = 0; i < 8; i++) {
      chessBoard[letakBidak][i] = pieces[0] + ' ' + side[j];
      if(i <= 4) {
        chessBoard[letakPerwira][i] = pieces[i+1] + ' ' + side[j];
      }
      if(i > 4) {
        chessBoard[letakPerwira][i] = pieces[8-i] + ' ' + side[j];
      }
    }
  }
  return chessBoard
}

const printBoard = x => {
  for(let i = 0; i < x.length; i++) {
    console.log(x[i].join('|'));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
