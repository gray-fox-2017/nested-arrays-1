'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let figure = ["Benteng ", "Kuda ", "Peluncur ", "Raja ", "Ratu ", "Peluncur ", "Kuda ", "Benteng "];
  let blackChess = [];
  let whiteChess = [];
  let blackPion = [];
  let whitePion = [];
  let kosong = [];

  for (let i = 0; i < figure.length; i++) {
    blackChess.push(figure[i] + "Hitam");
    whiteChess.push(figure[i] + "Putih");
    blackPion.push("Pion Hitam");
    whitePion.push("Pion Putih");
    kosong.push("Kosong");
  }

  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      chessboard.push(whiteChess);
    } else if (i === 1) {
      chessboard.push(blackPion);
    } else if (i === 6) {
      chessboard.push(whitePion);
    } else if (i === 7) {
      chessboard.push(blackChess.reverse());
    } else {
      chessboard.push(kosong);
    }
  }
  return chessboard;
}

const printBoard = x => {
  // ... write your code here
  console.log(x);
}

printBoard(makeChessboard()[0][7])


module.exports = {
  makeChessboard,
  printBoard
}
