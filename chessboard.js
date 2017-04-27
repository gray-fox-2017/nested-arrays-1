'use strict'

const makeChessboard = () => {
  let chessboard = [];
  let bidakCatur = ['Benteng', 'Kuda', 'Gajah', 'Menteri', 'Raja', 'Pion'];
  let warna = [' Hitam', ' Putih'];
  var boardLength = 8;

  for (var i=0; i<boardLength; i++){
    var row = []; // menampung susunan bidak pada row
    if(i===0){ // row pertama
      for (var j=0; j<boardLength; j++){
        if(j<=boardLength/2){
          row.push(bidakCatur[j]+warna[0]);
        } else {
          row.push(bidakCatur[boardLength-1-j]+warna[0]);
        }
      }
      chessboard.push(row);
    } else if (i==boardLength-1){ // row terakhir
      for (var k=0; k<boardLength; k++){
        if(k<=boardLength/2){
          row.push(bidakCatur[k]+warna[1]);
        } else {
          row.push(bidakCatur[boardLength-1-k]+warna[1]);
        }
      }
      chessboard.push(row);
    } else if (i==1 || i==6) { // row pion
      for (var l=0; l<boardLength; l++){
        if(i==1){
          row.push(bidakCatur[5]+warna[0]);
        } else if (i==6){
          row.push(bidakCatur[5]+warna[1]);
        }
      }
      chessboard.push(row);
    } else { // row kosong
      for (var m=0; m<boardLength; m++){
        row.push(' ');
      }
      chessboard.push(row);
    }
  }
  // ... write your code here
  return chessboard
}

const printBoard = x => {
  console.log(makeChessboard())
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
