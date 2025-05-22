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
        stopAlienAttacks()
        var elLose = document.querySelector('.gameOver')
        elLose.classList.remove('hide')
        elLose.classList.add('unHide')
    }
    if (HERO === null) {
        gGame.isOn = false
        stopAlienAttacks()
        stopAliens()
        var elLose = document.querySelector('.gameOver')
        elLose.classList.remove('hide')
        elLose.classList.add('unHide')
    }
}
function restartGame() {

    gPoints = 0
    gLives = 3
    gSuperAttack = 3
    gExplosion = 3

    stopAlienAttacks()

    const elExploration = document.querySelector('.exploration-container h1')
    elExploration.innerHTML = `Exploration: ${gExplosion}`

    const elSuperAttack = document.querySelector('.superAttack-container h1')
    elSuperAttack.innerHTML = `SuperAttack: <span>${gLives}</span>`

    const elLives = document.querySelector('.lives-container h1')
    elLives.innerHTML = `Lives: <span>${gLives}</span>`

    const elPoints = document.querySelector('.points-container h1')
    elPoints.innerHTML = `Points: ${gPoints}`


    gHero.pos = { i: 12, j: 7 }
    HERO = '🤡'

    var elWin = document.querySelector('.winMessage')
    elWin.classList.remove('unHide')
    elWin.classList.add('hide')
    var elLose = document.querySelector('.gameOver')
    elLose.classList.remove('unHide')
    elLose.classList.add('hide')

    gGame.isOn = true
    startAlienAttacks()
    onInit()

}

function onStartGame() {

    gGame.isOn = true

    var elPoints = document.querySelector('.points-container')
    elPoints.classList.add('unHide')
    elPoints.classList.remove('hide')

    var elLives = document.querySelector('.lives-container')
    elLives.classList.add('unHide')
    elLives.classList.remove('hide')

    var elSuperAttack = document.querySelector('.superAttack-container')
    elSuperAttack.classList.add('unHide')
    elSuperAttack.classList.remove('hide')

    var elSuperAttack = document.querySelector('.exploration-container')
    elSuperAttack.classList.add('unHide')
    elSuperAttack.classList.remove('hide')

    var elReset = document.querySelector('.fixglitch-container')
    elReset.classList.add('unHide')
    elReset.classList.remove('hide')


    var elPoints = document.querySelector('.table-container')
    elPoints.classList.add('unHideFlex')
    elPoints.classList.remove('hide')

    var elMenu = document.querySelector('.menu')
    elMenu.classList.remove('unHideFlex')
    elMenu.classList.add('hide')


    startAlienAttacks()
    startAliens()

}












