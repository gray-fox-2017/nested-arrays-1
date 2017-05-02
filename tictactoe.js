function tic_tac_toe_board () {
  // ...
  let ticTac = [];
  let countX = 0;
  let countO = 0;

  for (let i = 0; i<9; i++) {
    generator();
  }

  function generator() {
    let rand = Math.floor(Math.random()*10);
    if (rand % 2 === 0 ) {
      if (countX < 5) {
        ticTac.push('x')
        countX++;
      } else {
        ticTac.push('o')
        countO++;
      }
    } else {
      if (countO < 5) {
        ticTac.push('o')
        countO++;
      } else {
        ticTac.push('x')
        countX++;
      }
    }
  }

  var ticTacBoard = [];
  for (i=0; i<ticTac.length;i+=3) {
    ticTacBoard.push(ticTac.slice(i, i+3).join(' '))
  }

  return ticTacBoard.join('\n');
}



console.log(tic_tac_toe_board()) // => make a random tic tic board
