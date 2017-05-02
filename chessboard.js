'use strict'

const makeChessboard = () => {
  let chessboard = [];
  let nobles = ['Rook','Knight','Bishop','King','Queen','Bishop','Knight','Rook'];

  for (let i=0; i<8; i++) {
    if(i == 0) {
      chessboard.push([]);
      for (let j=0; j<8; j++) {
        chessboard[0].push("Black "+nobles[j]);
      }
    } else if (i == 1) {
      chessboard.push([]);
      for (let k=0;k<8;k++) {
        chessboard[1].push("Black Pawn");
      }
    } else if (i == 2) {
      chessboard.push([]);
      for (let l=0;l<8;l++) {
        chessboard[2].push("Nothing");
      }
    } else if (i == 3) {
      chessboard.push([]);
      for (let m=0;m<8;m++) {
        chessboard[3].push("Nothing");
      }
    } else if (i == 4) {
      chessboard.push([]);
      for (let n=0;n<8;n++) {
        chessboard[4].push("Nothing");
      }
    } else if (i == 5) {
      chessboard.push([]);
      for (let o=0;o<8;o++) {
        chessboard[5].push("Nothing");
      }
    } else if (i == 6) {
      chessboard.push([]);
      for (let p=0;p<8;p++) {
        chessboard[6].push("White Pawn");
      }
    } else if (i == 7) {
      chessboard.push([]);
      for (let q=0;q<8;q++) {
        chessboard[7].push("White " + nobles[q]);
      }
    }
  }

  return chessboard;
}

const printBoard = x => {
  // ... write your code here
  for (let k = 0; k < 8; k++) {
    console.log(x[k].join(' '));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
