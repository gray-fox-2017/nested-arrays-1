'use strict'

const makeChessboard = () => {
  let chessboard = []
  let putItems = []
  let kosong = ['']
  let items = ['Benteng','kuda','peluncur','raja','ratu','peluncur','kuda','Benteng']
  let warna = ['hitam','putih']
  let pion = ['pion']

  // ... write your code here
  for (let i = 0; i<8; i++) {
    if (i === 0 || i === 7) {
      putItems.push(items)
    }
    for (let j = 0; j<8; j++) {
      if (j % 2 == 0) {
        chessboard.push(warna[1]) //masukan warna putih
        //console.log(chessboard)
      } else {
        chessboard.push(warna[0]) //masukan warna hitam
        //console.log(chessboard)
      }

      if (i === 1 || i === 6) {
        putItems.push(pion)
      } else if (i === 2 || i === 3 || i === 4 || i === 5)  {
        putItems.push(kosong)
      }
    }
  }
  //console.log(chessboard)
  console.log(putItems)
  return chessboard
}

const printBoard = x => {
  // ... write your code here
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
