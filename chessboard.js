'use strict'

const makeChessboard = () => {
  let chessboard = []
  let bidak = ['pion','benteng','kuda','gajah','raja','ratu'];
  let warna = ['hitam','putih'];



  for (let i = 0; i < 8 ; i++) {
    let baris = [];
    let cwarna = (i < 4 ? warna[0] : warna[1]);
    switch (i) {
      case 0 : case 7:
        for (let j = 0; j< 8; j++) {
          let cbidak = '';
          switch (j) {
            case 0: case 7: cbidak = bidak[1]; break;
            case 1: case 6: cbidak = bidak[2]; break;
            case 2: case 5: cbidak = bidak[3]; break;
            case 3: cbidak = bidak[4]; break;
            case 4: cbidak = bidak[5]; break;
          }
          baris.push(cbidak+' '+cwarna);
        }
        break;
      case 1 : case 6:

        for (let j = 0; j<8; j++) {
          baris.push(bidak[0]+' '+cwarna);
        }
        break;
      default:
        for (let j = 0; j < 8; j++) {
          baris.push();
        }
        break;
    }
    chessboard.push(baris);
  }

  // console.log(chessboard[7][0]); //white rook
  // console.log(chessboard[0][1])// 'Kuda Hitam'
  // console.log(chessboard[6][4])// 'Pion Putih'
  // console.log(chessboard[7][0]);// 'Black bishop'
  return chessboard;
}

const printBoard = x => {
  console.log(x);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
