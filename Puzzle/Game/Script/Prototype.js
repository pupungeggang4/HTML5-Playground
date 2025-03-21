class Field {
    floor = []
    thing = []

    constructor() {

    }

    loadLevel(level) {
        let floor = level['floor']
        let thing = level['thing']

        this.size = [level['size'][0], level['size'][1]]
        this.floor = []
        this.thing = []

        for (let i = 0; i < this.size[0]; i++) {
            let tempFloor = []
            let tempThing = []
            for (let j = 0; j < this.size[i]; j++) {
                tempFloor.push(new EmptyFloor())
                tempThing.push(new EmptyThing())
            }
            this.floor.push(tempFloor)
            this.thing.push(tempThing)
        }
    }

    render() {
        let tempRect = new Rect2D(128, 128, UI.puzzle.cellSize[0], UI.puzzle.cellSize[0])
        for (let i = 0; i < this.size[0]; i++) {
            for (let j = 0; j < this.size[1]; j++) {
                strokeRectCenter(tempRect)
                tempRect.position.x += UI.puzzle.cellSize[0]
            }
            tempRect.position.y += UI.puzzle.cellSize[1]
            tempRect.position.x = 128
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