class Field {
    floor = []
    thing = []

    constructor() {
        this.player = new Player()
    }

    loadLevel(level) {
        let floor = level['floor']
        let thing = level['thing']

        this.size = [level['size'][0], level['size'][1]]
        this.renderStart = new Vector2D(672 - 32 * this.size[1], 432 - 32 * this.size[0])
        this.floor = []
        this.thing = []

        for (let i = 0; i < this.size[0]; i++) {
            let tempFloor = []
            let tempThing = []
            for (let j = 0; j < this.size[1]; j++) {
                tempFloor.push(new EmptyFloor())
                tempThing.push(new EmptyThing())
            }
            this.floor.push(tempFloor)
            this.thing.push(tempThing)
        }

        this.player.position = [level['start'][0], level['start'][1]]
        this.thing[level['start'][0]][level['start'][1]] = this.player
    }

    render() {
        let tempRect = new Rect2D(this.renderStart.x, this.renderStart.y, UI.puzzle.cellSize[0], UI.puzzle.cellSize[0])
        for (let i = 0; i < this.size[0]; i++) {
            for (let j = 0; j < this.size[1]; j++) {
                strokeRectCenter(tempRect)
                if (this.thing[i][j] instanceof Player) {
                    fillRectCenter(tempRect)
                }
                tempRect.position.x += UI.puzzle.cellSize[0]
            }
            tempRect.position.y += UI.puzzle.cellSize[1]
            tempRect.position.x = this.renderStart.x
        }
    }
}

class Floor {
    constructor() {

    }
}

class EmptyFloor extends Floor {
    constructor() {
        super()

    }
}

class Thing {
    constructor() {

    }
}

class EmptyThing extends Thing {
    constructor() {
        super()
    }
}

class Player extends Thing {
    position = [0, 0]
    
    constructor() {
        super()
        this.position = [0, 0]
    }

    move(direction, field) {
        if (direction === 'Right') {
            let tmp = field.thing[this.position[0]][this.position[1]]
            field.thing[this.position[0]][this.position[1]] = field.thing[this.position[0]][this.position[1] + 1]
            field.thing[this.position[0]][this.position[1] + 1] = tmp
            this.position[1] += 1
        }
    }
}