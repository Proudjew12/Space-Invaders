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

    startAliens()

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

    gPoints = 0

    gAliensTopRowIdx = 6
    gAliensBottomRowIdx = 6
    gAliensLeftColIdx = 6
    gAliensRightColIdx = 8
    gAliensDirection = 'right'
    if (gIntervalAliens) clearInterval(gIntervalAliens)

    const elPoints = document.querySelector('.points-container h1')
    elPoints.innerHTML = `Points: ${gPoints}`

    gHero.pos = { i: 12, j: 7 }
    gGame.isOn = true

    var elWin = document.querySelector('.winMessage')
    elWin.classList.remove('unHide')
    elWin.classList.add('hide')

    onInit()
}

