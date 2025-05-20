'use strict'

const ALIEN_SPEED = 500
var gIntervalAliens


var gAliensTopRowIdx
var gAliensBottomRowIdx
var gAliensLeftColIdx
var gAliensRightColIdx

var gIsAliensFreeze = false
var gAliensDirection = 'right'


function shiftBoardRight(board) {


    for (let i = gAliensTopRowIdx; i <= gAliensBottomRowIdx; i++) {
        for (let j = gAliensRightColIdx; j >= gAliensLeftColIdx; j--) {
            if (board[i][j].gameObject && board[i][j].gameObject.icon === ALIEN) {
                board[i][j + 1].gameObject = board[i][j].gameObject
                board[i][j].gameObject = null
            }
        }

    }
    gAliensLeftColIdx++
    gAliensRightColIdx++
}
function shiftBoardLeft(board) {


    for (let i = gAliensTopRowIdx; i <= gAliensBottomRowIdx; i++) {
        for (let j = gAliensLeftColIdx; j <= gAliensRightColIdx; j++) {
            if (board[i][j].gameObject && board[i][j].gameObject.icon === ALIEN) {
                board[i][j - 1].gameObject = board[i][j].gameObject
                board[i][j].gameObject = null
            }
        }

    }
    gAliensLeftColIdx--
    gAliensRightColIdx--
}
function shiftBoardDown(board) {

    for (let i = gAliensBottomRowIdx; i >= gAliensTopRowIdx; i--) {
        for (let j = gAliensLeftColIdx; j <= gAliensRightColIdx; j++) {
            board[i + 1][j].gameObject = board[i][j].gameObject
        }
    }
    for (let j = gAliensLeftColIdx; j <= gAliensRightColIdx; j++) {
        board[gAliensTopRowIdx][j].gameObject = null
    }
    gAliensTopRowIdx++
    gAliensBottomRowIdx++
}

function moveAliens() {
    if (gIsAliensFreeze) return

    if (gGame.alienCount === 0) {
        stopAliens()
        return
    }

    if (gAliensDirection === 'right') {
        if (gAliensRightColIdx < gBoard[0].length - 1) {
            shiftBoardRight(gBoard)
        } else {
            shiftBoardDown(gBoard)
            gAliensDirection = 'left'
        }
    } else {
        if (gAliensLeftColIdx > 0) {
            shiftBoardLeft(gBoard)
        } else {
            shiftBoardDown(gBoard)
            gAliensDirection = 'right'
        }
    }
    renderBoard(gBoard)
    if (gAliensBottomRowIdx >= gHero.pos.i - 1) stopAliens()
    checkGameOver()
}


function startAliens() {
    if (!gGame.isOn) return
    else {
        clearInterval(gIntervalAliens)
        gIntervalAliens = setInterval(moveAliens, ALIEN_SPEED)
    }

}
function stopAliens() {
    clearInterval(gIntervalAliens)
}