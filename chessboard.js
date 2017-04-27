'use strict'

const makeChessboard = () => {
  let chessboard = []
  // ... write your code here
  var papan = [];
  for (let i=1; i<=32; i++) {
    if (i % 2 !== 0) {
      papan.push('Kotak Hitam');
    } else {
      papan.push('Kotak putih')
    }
  }
  var bidakCatur = [];
  for (let a = 0; a< 2; a++) {
    for (let i = 1; i <= 16; i++) {

      if (a % 2 === 0) {
        var warna = ' Putih';
      } else {
        var warna = ' Hitam';
      }

      if (i === 1 || i === 8) {
        bidakCatur.push('Benteng' + warna);
      } else if (i === 2 || i === 7) {
        bidakCatur.push('Kuda' + warna);
      } else if (i === 3 || i === 6) {
        bidakCatur.push('Peluncur' + warna);
      } else if (i === 4) {
        bidakCatur.push('Ratu' + warna);
      } else if (i === 5) {
        bidakCatur.push('Raja' + warna);
      } else {
        bidakCatur.push('Pion' + warna);
      }
    }
  }


  var lebarPapanCatur = 8;
  for (let i=0; i<bidakCatur.length; i+=lebarPapanCatur) {
    chessboard.push(bidakCatur.slice(i, i+lebarPapanCatur));
  }
  for (let i=0;i<papan.length;i+=lebarPapanCatur) {
    chessboard.splice(0, 0, papan.slice(i, i+lebarPapanCatur));
  }

  return chessboard
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
