'use strict'

var ALIEN_LASER = '❤️‍🔥'
var ALIEN_ATTACK_INTERVAL = 2000
var ALIEN_LASER_SPEED = 200


var gAlienAttackInterval

function alienShoot() {

    var alienCols = []
    for (let j = gAliensLeftColIdx; j <= gAliensRightColIdx; j++) {
        for (let i = gAliensTopRowIdx; i <= gAliensBottomRowIdx; i++) {
            if (gBoard[i][j] && gBoard[i][j].gameObject && gBoard[i][j].gameObject.icon === ALIEN) {
                alienCols.push({ i, j })
                break
            }
        }
    }
    if (alienCols.length === 0) return

    const randomAlien = alienCols[Math.floor(Math.random() * alienCols.length)]
    var i = randomAlien.i + 1
    var j = randomAlien.j

    const alienLaserInterval = setInterval(() => {

        if (i >= gBoard.length) {
            clearInterval(alienLaserInterval)
            return
        }


        const cellObj = gBoard[i][j].gameObject

        if (cellObj && cellObj.icon === LASER) {
            clearInterval(alienLaserInterval)
            updateCell({ i, j }, null)
            return
        }


        if (cellObj && cellObj.icon === HERO) {
            clearInterval(alienLaserInterval)
            updateCell({ i, j }, null)
            HERO = null
            stopAlienAttacks()
            checkGameOver()
            return
        }

        if (cellObj && cellObj.icon === ALIEN) {
            i++
            return
        }

        blinkAlienLaser({ i, j })
        i++
    }, ALIEN_LASER_SPEED);
}

function blinkAlienLaser(pos) {

    updateCell(pos, { icon: ALIEN_LASER })

    setTimeout(() => {
        updateCell(pos, null)
    }, ALIEN_LASER_SPEED);
}

function startAlienAttacks() {

    gAlienAttackInterval = setInterval(() => {
        alienShoot()
    }, ALIEN_ATTACK_INTERVAL);

}

function stopAlienAttacks() {
    clearInterval(gAlienAttackInterval)
}