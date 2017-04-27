'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let bidak = ["Benteng", "Kuda" , "Bhisop", "Raja", "Mentri", "Bishop" , "Kuda", "Benteng" ];
  for (let i=0; i<bidak.length; i++) {
    chessboard.push([]);
    for (let j=0; j< bidak.length; j++) {
      if (i==0) {
        chessboard[i].push(`${bidak[j]} Hitam`);
      }

      if(i==1) {
        if(j<8) {
          chessboard[i].push("Pion Hitam");
        }

      } else if(i>1 && i<6) {
        chessboard[i].push(" ");
      } else if (i==6) {
        chessboard[i].push("Pion Putih");
      }

      if (i==7)  {
        chessboard[i].push(`${bidak[j]} Putih`);
      }
    }
  }

  return chessboard
}

const printBoard = x => {
  // ... write your code here
  let Rapihkan = makeChessboard();
  for (let i=0; i<8; i++) {
    console.log(Rapihkan[i].join("|"));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
