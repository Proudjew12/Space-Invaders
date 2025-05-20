'use strict'

var gBoard
const BOARD_SIZE_ROWS = 14
const BOARD_SIZE_COLS = 15

function createBoard() {
    gBoard = []
    for (let i = 0; i < BOARD_SIZE_ROWS; i++) {
        gBoard[i] = []
        for (let j = 0; j < BOARD_SIZE_COLS; j++) {
            gBoard[i][j] = createCell()
        }
    }
}
function checkWinning() {
    if (gGame.alienCount === 0) {
        gGame.isOn = false
        var elWin = document.querySelector('.winMessage')
        elWin.classList.remove('hide')
        elWin.classList.add('unHide')
    }
}
function checkGameOver() {
    if (gAliensBottomRowIdx >= gHero.pos.i - 1) {
        gGame.isOn = false
        var elLose = document.querySelector('.gameOver')
        elLose.classList.remove('hide')
        elLose.classList.add('unHide')
    }
}
function restartGame() {

    gPoints = 0

    const elPoints = document.querySelector('.points-container h1')
    elPoints.innerHTML = `Points: ${gPoints}`

    gHero.pos = { i: 12, j: 7 }
    gGame.isOn = true

    var elWin = document.querySelector('.winMessage')
    elWin.classList.remove('unHide')
    elWin.classList.add('hide')
    var elLose = document.querySelector('.gameOver')
    elLose.classList.remove('unHide')
    elLose.classList.add('hide')

    onInit()
}
function onStartGame() {

    gGame.isOn = true

    var elTable = document.querySelector('.points-container')
    elTable.classList.add('unHide')
    elTable.classList.remove('hide')

    var elPoints = document.querySelector('.table-container')
    elPoints.classList.add('unHideFlex')
    elPoints.classList.remove('hide')

    var elMenu = document.querySelector('.menu')
    elMenu.classList.remove('unHideFlex')
    elMenu.classList.add('hide')

}













