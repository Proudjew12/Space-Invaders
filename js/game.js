'use strict'

var gGame = {
    isOn: false,
    alienCount: 0
}

function onInit() {
    gGame.isOn = true
    createBoard()

    createHero(gBoard)
    createAliens(gBoard)

    countAlien(gBoard)
    renderBoard(gBoard)

    console.table(gBoard)

}

function checkWinning() {
    if (gGame.alienCount === 0) {
        gGame.isOn = false
        var elWin = document.querySelector('.winMessage')
        elWin.classList.remove('hide')
        elWin.classList.add('unHide')
    }
}

function restartGame() {
    gHero.pos = { i: 12, j: 7 }
    gGame.isOn = true

    var elWin = document.querySelector('.winMessage')
    elWin.classList.remove('unHide')
    elWin.classList.add('hide')

    onInit()
}

