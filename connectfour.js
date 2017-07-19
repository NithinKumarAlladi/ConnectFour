var isPlayer1Turn = true;

var table = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function isNowPlayer1Turn() {
    return isPlayer1Turn;
}

function changeTurn() {
    isPlayer1Turn = !isPlayer1Turn;
    displayTurn();
}

function displayTurn() {
    document.getElementById('turnDisplay').innerText = isPlayer1Turn ? "Player 1 ( green )" : "Player 2 ( blue )";

}

function fill(buttonid) {
    for (i = 0; i < 6; i++) {
        if (table[buttonid][i] === 0) {
            table[buttonid][i] = isPlayer1Turn ? 1 : 2;
            console.log(table);
            document.getElementById('' + buttonid + i).className = isPlayer1Turn ? "green" : "blue";
            validateColoumn(buttonid, i);
            validateRow(i);
            break;
        }
    }
    changeTurn();
}

function validateColoumn(rowNum, coloumnNum) {
    j = 0;
    if (2 < coloumnNum < 6) {
        for (i = coloumnNum; table[rowNum][i] === table[rowNum][i - 1]; i--) {
            j++;
            if (j === 3) {
                table[rowNum][coloumnNum] === 1 ? alert('player 1 wins') : alert('player 2 wins');
            }
        }
    }
}

function validateRow(coloumnNum) {
    j=0;
    for (i = 6; table[i][coloumnNum] === table[i-1][coloumnNum]; i--) {
            j++;
            if (j === 3) {
                table[i][coloumnNum] === 1 ? alert('player 1 wins') : alert('player 2 wins');
            }
        }
}

displayTurn();