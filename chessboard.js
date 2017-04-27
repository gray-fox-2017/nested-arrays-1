'use strict'

const makeChessboard = () => {
  let chessboard=[[]];
  let chesspiece=[['Benteng', 'Kuda', 'Gajah','Raja','Ratu'],[]];
  for (let i=0;i<3;i++) {chesspiece[0].push(chesspiece[0][2-i]);}
  for (let j=0;j<8;j++) {chesspiece[1].push("Bidak");}
  
  // make empty chessboard
  for (let i=0;i<8;i++){
    if (i>0) { chessboard.push([]) }
    for (let j=0;j<8;j++){
      chessboard[i].push("");
    }
  }

  // fill the chessboard
  for (let pos=0;pos<8;pos++) {
    chessboard[0][pos] = chesspiece[0][7-pos];
    chessboard[7][pos] = chesspiece[0][pos];
    chessboard[1][pos] = chesspiece[1][pos];
    chessboard[6][pos] = chesspiece[1][pos];
  }

  return chessboard
}

const printBoard = x => {
  console.log(x);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
