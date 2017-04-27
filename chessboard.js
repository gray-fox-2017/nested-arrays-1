'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let chessArr = ["Benteng ", "Kuda Liar ", "Peluncur ", "Raja Namrudz ", "Ratu Elizabeth ", "Peluncur ", "Kuda Liar ", "Benteng "],
      caturHitam = [],
      caturPutih = [],
      pionPutih = [],
      pionHitam = [],
      kotakKosong = [];

  for (let i = 0; i < chessArr.length; i++) {
    caturHitam.push(chessArr[i] + "Hitam");
    caturPutih.push(chessArr[i] + "Putih");
    pionHitam.push("Pion Hitam");
    pionPutih.push("Pion Putih");
    kotakKosong.push("Kosong");
  }

  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      chessboard.push(caturPutih);
    } else if (i === 1) {
      chessboard.push(pionHitam);;
    } else if (i === 6) {
      chessboard.push(pionPutih);
    } else if (i === 7) {
      chessboard.push(kotakKosong);
    }
  }
  return chessboard;
}


const printBoard = x => {
  // ... write your code here
  return console.log(x);
}


printBoard(makeChessboard()[0][7]);

module.exports = {
  makeChessboard,
  printBoard
}
