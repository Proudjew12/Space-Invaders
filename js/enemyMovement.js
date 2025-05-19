'use strict'

var gAliens = {
    topRow: 6,
    bottomRow: 6,
    leftCol: 6,
    rightCol: 8,
    direction: 'right',
}

var gIntervalAliens
var gIsAlienFreeze = false


function shiftBoardLeft() {
    for (let i = gAliens.topRow; i <= gAliens.bottomRow; i++) {
        for (let j = gAliens.leftCol; j <= gAliens.rightCol; j++) {
            gBoard[i][j].gameObject = gBoard[i][j + 1].gameObject
        }
        gBoard[i][gAliens.rightCol].gameObject = null
    }
    gAliens.leftCol--
    gAliens.rightCol--
}
function shiftBoardRight() {
    for (let i = gAliens.topRow; i <= gAliens.bottomRow; i++) {
        for (let j = gAliens.rightCol; j >= gAliens.leftCol; j--) {
            gBoard[i][j].gameObject = gBoard[i][j - 1].gameObject
        }
        gBoard[i][gAliens.leftCol].gameObject = null
    }
    gAliens.leftCol++
    gAliens.rightCol++
}
function shiftBoardDown() {
    for (let i = gAliens.bottomRow; i > gAliens.topRow; i--) {
        for (let j = gAliens.leftCol; j <= gAliens.rightCol; j++) {
            gBoard[i][j].gameObject = gBoard[i - 1][j].gameObject
        }
    }
    for (let j = gAliens.leftCol; j < gAliens.rightCol; j++) {
        gBoard[gAliens.topRow][j].gameObject = null
    }
    gAliens.topRow++
    gAliens.bottomRow++
}



function moveAliens() {
    if (gIsAlienFreeze) return

    if (gAliens.direction === 'right') {
        if (gAliens.rightCol < gBoard[0].length - 1) {
            shiftBoardRight()
        } else {
            shiftBoardDown()
            gAliens.direction = 'left'
        }
    } else {
        if (gAliens.leftCol > 0) {
            shiftBoardLeft()
        } else {
            shiftBoardDown()
            gAliens.direction = 'right'
        }
    }
    renderBoard(gBoard)

    if (gAliens.bottomRow >= gHero.pos.i - 2) stopAliens()
}

function startAliens() {
    gIntervalAliens = setInterval(() => {
        moveAliens()
    }, ALIEN_SPEED);
}
function stopAliens() {
    clearInterval(gIntervalAliens)
}