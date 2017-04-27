function tic_tac_toe_board () {
  // ...
    let papanTicToc = [];
    let X = "X";
    let O = "O";
    let countX = 1;
    let countO = 1;

    for(var i = 0; i<3; i++){
        papanTicToc.push([]);
        for(var j = 0; j < 3; j++){
            let tmp = Math.floor(Math.random() * 2) + 1;
            if(countO == 5){
               papanTicToc[i].push([X]);
            }
            else if(countX == 5){
                papanTicToc[i].push([O]);
            }
            else {
                if (tmp == 1) {
                    papanTicToc[i].push([X]);
                    countX++;
                }
                else {
                    papanTicToc[i].push([O]);
                    countO++;
                }
            }
        }
    }

    return papanTicToc;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
