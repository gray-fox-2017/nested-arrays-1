
let getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function tic_tac_toe_board () {
  // ...
  let countX = 0;
  let countO = 0;
  let ticTacBoard = [];

  for (let j = 0; j < 3; j++) {
    let tempArr = [];
    for (let i = 0; i < 3; i++) {
      let random = getRandom(0,2);
      if (random == 0) {
        if (4 <= countX <= 5) {
          tempArr.push("X");
          countX += 1;
          console.log("masuk x");
        } else {
          tempArr.push("O")
          countO += 1;
        }
      } else {
        if ( 4 <= countO <= 5 ) {
          tempArr.push("O");
          countO += 1;
          console.log("masuk o");
        } else {
          tempArr.push("X")
          countX += 1;
        }
      }
    }
    ticTacBoard.push(tempArr);
  }
  return ticTacBoard;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
