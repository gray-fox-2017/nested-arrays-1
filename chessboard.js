'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let tempArr = []
  let finalArr = [];
  let figure = ["Benteng ", "Kuda ", "Peluncur ", "Raja ", "Ratu ", "Peluncur ", "Kuda", "Benteng"];
  let blackChess = [];
  let whiteChess = [];
  let blackPion = [];
  let whitePion = [];

  for (let i = 0; i < figure.length; i++) {
    blackChess.push(figure[i] + "Hitam");
    whiteChess.push(figure[i] + "Putih");
  }

  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      finalArr.push(blackChess);
    } else if (i === 1) {
      finalArr.push(blackPion);
    } else if (i === 6) {
      finalArr.push(whitePion);
    } else if (i === 7) {
      finalArr.push(whiteChess.reverse());
    } else {
      finalArr.push("Kosong");
    }
  }
  return chessboard
}

const printBoard = x => {
  // ... write your code here
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
