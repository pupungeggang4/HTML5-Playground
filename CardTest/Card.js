function testThing() {
    let str = document.getElementById('testinput').value
    if (str === 'play 0') {
        player.playCard(0, game)
    }
}
