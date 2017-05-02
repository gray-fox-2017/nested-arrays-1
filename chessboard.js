'use strict'

const makeChessboard = () => {
  let chessboard=[[]];
  let chesspiece=[['Benteng', 'Kuda', 'Gajah','Raja','Ratu','Gajah','Kuda','Benteng'],[]];
  //let chesspiece=[['Benteng', 'Kuda', 'Gajah','Raja','Ratu'],[]];
  //for (let i=0;i<3;i++) {chesspiece[0].push(chesspiece[0][2-i]);}
  for (let j=0;j<8;j++) {chesspiece[1].push("Pion");}
  
  // make empty chessboard
  for (let i=0;i<8;i++){
    if (i>0) { chessboard.push([]) }
    for (let j=0;j<8;j++){
      chessboard[i].push("");
    }
  }

  // fill the chessboard
  for (let pos=0;pos<8;pos++) {
    chessboard[0][pos] = chesspiece[0][7-pos] + " Hitam";
    chessboard[7][pos] = chesspiece[0][pos] + " Putih";
    chessboard[1][pos] = chesspiece[1][pos] + " Hitam"; 
    chessboard[6][pos] = chesspiece[1][pos] + "Putih";
  }

  return chessboard
}

const printBoard = x => {
  for (let i=0; i<x.length; i++) {
    console.log(x[i].join(" "));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
