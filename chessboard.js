'use strict'

const makeChessboard = () => {
    let chessboard = [];
    // ... write your code here
    let kosong = [];
    let anakCatur = ["Pion", "Raja", "Menteri", "Benteng", "Gajah", "Kuda"];
    let WarnaCatur = ["Hitam", "Putih"];

    for (var i = 0; i < 8; i++) {
        if (i == 0) {
            for (var pionHitamAtas = 0; pionHitamAtas <= 8; pionHitamAtas++) {
                //Benteng Hitam.
                if (pionHitamAtas == 0 || pionHitamAtas == 7) {
                    chessboard.push(anakCatur[3] + " " + WarnaCatur[0]);
                }
                //Kuda Hitam
                else if (pionHitamAtas == 1 || pionHitamAtas == 6) {
                    chessboard.push(anakCatur[5] + " " + WarnaCatur[0]);
                }
                //Gajah Hitam
                else if (pionHitamAtas == 2 || pionHitamAtas == 5) {
                    chessboard.push(anakCatur[4] + " " + WarnaCatur[0]);
                }
                //Raja Hitam
                else if (pionHitamAtas == 4) {
                    chessboard.push(anakCatur[2] + " " + WarnaCatur[0]);
                }
                //Menteri Hitam
                else if (pionHitamAtas == 3) {
                    chessboard.push(anakCatur[1] + " " + WarnaCatur[0]);
                }
            }
        }
        else if (i == 1) {
            // ini untuk PION
            for (var j = 0; j < 8; j++) {
                chessboard.push(anakCatur[0] + " " + WarnaCatur[0]);
            }
        }
        else if (i == 6) {
            for (var pionPutih = 0; pionPutih < 8; pionPutih++) {
                chessboard.push(anakCatur[0] + " " + WarnaCatur[1]);
            }
        }
        else if (i == 7) {
            for (var pionPutihBawah = 0; pionPutihBawah < 8; pionPutihBawah++) {
                //Benteng Putih.
                if (pionPutihBawah == 0 || pionPutihBawah == 7) {
                    chessboard.push(anakCatur[3] + " " + WarnaCatur[1]);
                }
                //Kuda Putih.
                else if (pionPutihBawah == 1 || pionPutihBawah == 6) {
                    chessboard.push(anakCatur[5] + " " + WarnaCatur[1]);
                }
                //Gajah Putih
                else if (pionPutihBawah == 2 || pionPutihBawah == 5) {
                    chessboard.push(anakCatur[4] + " " + WarnaCatur[1]);
                }
                //Menteri Putih
                else if (pionPutihBawah == 3) {
                    chessboard.push(anakCatur[2] + " " + WarnaCatur[1]);
                }
                //Raja Putih
                else if (pionPutihBawah == 4) {
                    chessboard.push(anakCatur[1] + " " + WarnaCatur[1]);
                }
            }
        }
        else {
            chessboard.push(kosong);
        }
    }
    return chessboard;
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
