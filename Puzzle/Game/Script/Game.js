class GameHandler {
    constructor() {
        field = new Field()
        this.keymap = {'Up': 'w', 'Left': 'a', 'Down': 's', 'Right': 'd'}
    }

    keyDownPuzzle(key) {
        for (let k in this.keymap) {
            if (key === this.keymap[k]) {
                field.player.move(k, field)
            }
        }
    }

    keyUpPuzzle(key) {

    }

    mouseUpPuzzle(pos, button) {

    }
}