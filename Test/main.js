class Card {
    attack = 0
    hp = 0
    energy = [10, 10, 10]
    position = new Vector2D(0, 0)
    li = new List()

    constructor(data) {
        let dataCopy = JSON.parse(JSON.stringify(data))
        for (let key in dataCopy) {
            if (key === 'position') {
                this[key] = new Vector2D(this[key]['x'], this[key]['y'])
            } else if (key === 'li') {
                this[key] = new List()
            } else {
                this[key] = dataCopy[key]
            }
        }
    }

    hello() {
        console.log('Hello')
    }

    clone() {
        return new Card(JSON.parse(JSON.stringify(this)))
    }
}

class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    print() {
        console.log(this.x, this.y)
    }
}

class List {
    constructor() {
        this.l = [1, 2, 3]
    }

    print() {
        console.log(this.l)
    }
}

function clone(obj) {
    return new obj.constructor(JSON.parse(JSON.stringify(obj)))
}

a = new Card({attack: 10, hp: 10, energy: [1, 1, 1], position: {x: 1, y: 1}, li: [1, 2, 3]})
