function tic_tac_toe_board () {
  //eks = 1, oh = 0
  let nEx = 0;
  let nOh = 0;
  let board = [];

  for (let i = 0; i < 3 ; i++) {
    let baris = [];
    for (let j = 0; j < 3; j++) {
      let res = Math.round(Math.random());
      if (res === 0 && nOh < 5){
        nOh += 1;
        baris.push('O');
      }else {
        nEx +=1;
        baris.push('X');
      }
    }
    board.push(baris);
  }
  return board;

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
