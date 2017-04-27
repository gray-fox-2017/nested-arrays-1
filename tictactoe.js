function tic_tac_toe_board () {
  let o = 0
  let x = 0
  let board = []
  let board2 = []
  for (let i = 0; i < 3; i++){
    board.push([])
    for(let j = 0; j < 3; j++){
      let random = Math.floor(Math.random()*2)
        if(random === 0 && o < 5){
          board[i].push("O")
          o++
        }
        else if(x < 5){
          board[i].push("X")
          x++
        }
        else if (o < 5 && x === 5){
          board[i].push("O")
          o++
        }
    }
  }
  for(let x = 0; x < board.length; x++){
    board2.push(board[x].join("|"))
  }
  return board2.join("\n")
}


console.log(tic_tac_toe_board()) // => make a random tic tic board
