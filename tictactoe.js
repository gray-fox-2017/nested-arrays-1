function tic_tac_toe_board () {
  // ...

  let board = []
  let x = 'X'
  let o = 'O'
  let numX = 0
  let numO = 0

  for (let i = 0; i < 3; i++) {
  let hasil = []
  //console.log('\n')
    for (let j = 0; j < 3; j++) {
      let random = Math.round(Math.random())
      console.log(random);
      if (random == 0 && numX < 5) {
        numX += 1
        hasil.push(x)
      } else {
        numO += 1
        hasil.push('o')
      }
    }
    board.push(hasil)
  }

  //return hasil.push()
  return board
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
