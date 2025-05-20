'use strict'

var gGame = {
    isOn: false,
    alienCount: 0
}

function onInit() {
    gGame.isOn = false
    createBoard()

    createHero(gBoard)
    createAliens(gBoard)
    countAlien(gBoard)

    startAliens()
    renderBoard(gBoard)

    console.table(gBoard)

}


