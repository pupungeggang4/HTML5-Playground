class Field {
    floor = []
    thing = []

    constructor() {

    }

    loadLevel(level) {
        this.floor = []
        this.thing = []

        let floor = level['floor']
        let thing = level['thing']

        let temp = new EmptyFloor()
    }
}

class Floor {

}

class EmptyFloor extends Floor {
    constructor() {
        this.a = 1
    }
}

class Thing {
    
}