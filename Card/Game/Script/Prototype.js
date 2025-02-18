class Field {
    unitList = []

    constructor() {
        this.unitList = [
            new Unit(dataCard[1]), 
            new EmptyThing(), new EmptyThing(), new EmptyThing(), new EmptyThing(), new EmptyThing(), new EmptyThing(),
            new EmptyThing(), new EmptyThing(), new EmptyThing(), new EmptyThing(), new EmptyThing(), new EmptyThing(),
            new Unit(dataCard[1])
        ] 
    }

    render() {
        for (let i = 0; i < 14; i++) {
            context.strokeRect(UI.battle.field[i][0], UI.battle.field[i][1], UI.unit.size[0], UI.unit.size[1])
            if (this.unitList[i] instanceof Unit) {
                this.unitList[i].render(UI.battle.field[i][0], UI.battle.field[i][1])
            }
        }
    }
}

class Player {
    energy = []
    hand = []
    deck = []

    constructor() {
        this.hand = [new Card(dataCard[1]), new Card(dataCard[1]), new Card(dataCard[1])]
        this.deck = []
        this.energy = []
    }

    buildDeck() {
        this.deck = [new Card(dataCard[1]), new Card(dataCard[1]), new Card(dataCard[1])]
    }

    renderHand() {
        for (let i = 0; i < this.hand.length; i++) {
            this.hand[i].render(UI.battle.handStart[0] + UI.battle.handInterval[0] * i, UI.battle.handStart[1] + UI.battle.handInterval[1] * i)
        }
    }
}

class Card {
    energy = []
    attack = 0
    hp = 0
    name = 'Card'

    constructor(data) {
        let dataCopy = JSON.parse(JSON.stringify(data))
        this.name = dataCopy['Name']
        this.energy = dataCopy['Energy']
        this.attack = dataCopy['Stat'][0]
        this.hp = dataCopy['Stat'][1]
    }

    render(x, y) {
        context.font = '16px neodgm'
        context.fillStyle = 'White'
        context.fillRect(x, y, UI.card.size[0], UI.card.size[1])
        context.fillStyle = 'Black'
        context.strokeRect(x, y, UI.card.size[0], UI.card.size[1])
        context.strokeRect(x + UI.card.img[0], y + UI.card.img[1], UI.card.img[2], UI.card.img[3])
        context.fillText(this.name, x + UI.card.name[0], y + UI.card.name[1])
        context.font = '32px neodgm'
        context.fillText(this.attack, x + UI.card.attack[0], y + UI.card.attack[1])
        context.fillText(this.hp, x + UI.card.hp[0], y + UI.card.hp[1])
    }
}

class FieldThing {
    constructor() {

    }
}

class EmptyThing extends FieldThing {
    constructor() {
        super()
    }
}

class Unit extends FieldThing {
    energy = []
    attack = 0
    hp = 0
    name = 'Unit'

    constructor(data) {
        super()
        let dataCopy = JSON.parse(JSON.stringify(data))
        this.energy = dataCopy['Energy']
        this.attack = dataCopy['Stat'][0]
        this.hp = dataCopy['Stat'][1]
        this.name = dataCopy['Name']
    }

    render(x, y) {
        context.font = '32px neodgm'
        context.fillStyle = 'White'
        context.fillRect(x, y, UI.unit.size[0], UI.unit.size[1])
        context.strokeRect(x, y, UI.unit.size[0], UI.unit.size[1])
        context.fillStyle = 'Black'
        context.fillText(this.attack, x + UI.unit.attack[0], y + UI.unit.attack[1])
        context.fillText(this.hp, x + UI.unit.hp[0], y + UI.unit.hp[1])
    }
}
