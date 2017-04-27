'use strict'

const makeChessboard = () => {
  let chessboard = []
  let putItems = []
  let kosong = ['#','#','#','#','#','#','#','#']
  let items = ['Benteng','kuda','peluncur','raja','ratu','peluncur','kuda','Benteng']
  let warna = ['hitam','putih']
  let pion = ['pion','pion','pion','pion','pion','pion','pion','pion']

  //debugger
  // ... write your code here

  for (let i = 0; i<8; i++) {
    //put items on board
    if (i === 0) { //nobble putih
      let newItems = items.map(isiArray => {
        return isiArray + ' putih'
      })
      putItems.push(newItems)
    } else if (i === 1) { //pion putih
      let newItems = pion.map(isiArray => {
        return isiArray + ' putih'
      })
      putItems.push(newItems)
    } else if (i === 2 || i === 3 || i === 4 || i === 5)  { //kosong
      let newItems = kosong.map(isiArray => {
        return isiArray
      })
      putItems.push(newItems)
    } else if (i === 6) {
      let newItems = pion.map(isiArray => {
        return isiArray + ' hitam'
      })
      putItems.push(newItems)
    } else if (i === 7) {
      let newItems = items.map(isiArray => {
        return isiArray + ' hitam'
      })
      putItems.push(newItems)
    }

  }
  //console.log(chessboard)
  console.log(putItems)
  console.log(putItems[7][0] == 'Benteng hitam')
  //console.log(c)
  return chessboard
}

const printBoard = x => {
  // ... write your code here

  //return console.log(x)
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
