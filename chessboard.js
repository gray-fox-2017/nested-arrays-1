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
      finalArr.push(blackChess);
    } else if (i === 1) {
      finalArr.push(blackPion);
    } else if (i === 6) {
      finalArr.push(whitePion);
    } else if (i === 7) {
      finalArr.push(whiteChess.reverse());
    } else {
      finalArr.push(kosong);
    }
  }
  return finalArr;
}

const printBoard = x => {
  // ... write your code here
  console.log(x);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
