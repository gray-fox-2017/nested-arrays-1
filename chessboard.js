'use strict'

const makeChessboard = () => {
  let chessboard = []
  /*
  Posisi [0][0] adalah Benteng Hitam sebelah kanan dari pemain Hitam
  atau sebelah kiri pemain Putih
  */

  var isi = ["Benteng","Kuda","Gajah","Raja","Ratu","Gajah","Kuda","Benteng", "Prajurit", "", "Hitam", "Putih"];
  var baris_0 = [];
  var baris_1 = [];
  var baris_kosong = [];
  var baris_6 = [];
  var baris_7 = [];
  for (let i = 0; i < 8; i++){
    switch (i) {
      case 0:
      for (let j = 0, k = 8; j < k;j++){
        baris_0.push(isi[j]+ " " + isi[10]);
      }
      chessboard.push(baris_0);
        break;

        case 1:
        for (let j = 0, k = 8; j < k;j++){
          baris_1.push(isi[8]+ " " + isi[10]);
        }
        chessboard.push(baris_1);
          break;

        case 5:
          for (let j = 0, k = 8; j < k;j++){
            baris_kosong.push(isi[9]);
          }
          for (let l = 0; l < 4 ; l++){
            chessboard.push(baris_kosong);
          }
          break;

        case 6:
          for (let j = 0, k = 8; j < k;j++){
            baris_6.push(isi[8]+ " " + isi[11]);
          }
          chessboard.push(baris_6);
            break;

          case 7:
            for (let j = 0, k = 8; j < k;j++){
              baris_7.push(isi[j]+ " " + isi[11]);
            }
            chessboard.push(baris_7);
              break;

      default:
      "";
    }

  }

  return chessboard
}
const printBoard = x => {
  for (let i = 0 ; i < x.length; i++){
    console.log(x[i].join(" "))
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
