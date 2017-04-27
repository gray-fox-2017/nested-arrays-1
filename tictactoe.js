function tic_tac_toe_board () {
  // ...
  let ticTac = [];
  for (let i = 0; i<5; i++) {
    generator();
  }
  for (let i = 0; i<4; i++) {
    let gabung = ticTac.join('');
    let jumlahX = gabung.match(/[x]/g);
    let jumlahO = gabung.match(/[o]/g);
    if (jumlahO.length === jumlahX.length) {
      generator();
    } else if (jumlahO.length  < jumlahX.length) {
      ticTac.push('o');
    } else if (jumlahO.length > jumlahX.length ){
      ticTac.push('x');
    }
  }

  function generator() {
    let generator = Math.floor(Math.random()*10);
    if (generator % 2 === 0) {
      return ticTac.push('x')
    } else {
      return ticTac.push('o')
    }
  }

  var ticTacBoard = [];
  for (i=0; i<ticTac.length;i+=3) {
    ticTacBoard.push(ticTac.slice(i, i+3))
  }

  return ticTacBoard;
}



console.log(tic_tac_toe_board()) // => make a random tic tic board
