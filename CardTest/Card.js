function testThing() {
    let str = document.getElementById('testinput').value
    let cmd = str.split(' ')
    console.log(cmd)
    if (state === '') {
        if (cmd[0] === 'play') {
            if (parseInt(cmd[1]) < player.hand.length) {
                player.playCard(parseInt(cmd[1]), game)
            }
        }
    } else if (state === 'input') {
        if (cmd[0] === 'cancel') {
            game.statementStack = []
            player.hand.splice(player.cardPlaying[0][0], 0, player.cardPlaying[0][1])
            player.cardPlaying = []

            for (let i = player.energyPay.length - 1; i >= 0; i--) {
                player.energy.push(player.energyPay.splice(i, 1)[0])
            }
            state = ''
        }
        if (game.cond === 'player_empty') {
            if (parseInt(cmd[0]) >= 7 && parseInt(cmd[0]) < 13) {
                if (field.unitList[parseInt(cmd[0])] instanceof EmptyUnit) {
                    game.env[game.varName] = parseInt(cmd[0])
                    state = ''
                }
            }
        }
    }
    document.getElementById('testinput').value = ''
}
