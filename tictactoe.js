function tic_tac_toe_board () {
  let tttboard = [[]];

  // make empty tic tac toe board
  //for (let i=0;i<3;i++){
  //  if (i>0) { tttboard.push([]) }
  //  for (let j=0;j<3;j++){
  //    tttboard[i].push("");
  //  }
  //}

  let xO = ["X","O"];
  let inputXO = "";
  let countXO = [0,0];

  // create and fill the board
  for (let i=0;i<3;i++){
    if (i>0) { tttboard.push([]) }
    for (let j=0;j<3;j++){
      inputXO = xO[Math.floor(Math.random() * 2)];
      inputXO === "X" ? countXO[0]+=1 : countXO[1]+=1;

      // X and O should not be more than 5
      while (countXO[0] > 5 || countXO[1] > 5) {
        countXO[xO.indexOf(inputXO)] -= 1;
        inputXO = xO[Math.abs(1-xO.indexOf(inputXO))];
        inputXO === "X" ? countXO[0]+=1 : countXO[1]+=1;
      }

      tttboard[i].push(inputXO);
    }
  }

  return tttboard;

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
