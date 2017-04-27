function tic_tac_toe_board () {
  let board = [];
  let data = [['O',0],['X',0]];

  for (let i = 0; i < 3 ; i++) {
    let baris = [];
    for (let j = 0; j < 3; j++) {
      let res = Math.round(Math.random());
      if (data[res][1] > 4 ) res = (res === 1 ? 0 : 1);
      data[res][1] += 1;
      baris.push(data[res][0]);
    }
    board.push(baris);
  }
  
  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
