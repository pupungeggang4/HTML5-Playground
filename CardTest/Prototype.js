class Card {
    constructor() {

    }
}

class FieldThing {
    constructor() {

    }

    handleFrame() {

    }
}

class EmptyUnit extends FieldThing {
    constructor() {
        super()
    }
}

class Unit extends FieldThing {
    baseAttack = 0
    attack = 0
    hp = 0
    ability = []

    constructor() {
        super()
        this.baseAttack = 2
        this.hp = 3
    }

    handleFrame() {
        this.attack = this.baseAttack
    }
}

class Leader extends Unit {
    constructor() {
        super()
        this.attack = 0
        this.hp = 30
    }

    handleFrame() {

    }
}

class Field {
    unitList = []

    constructor() {
        this.unitList = [
            new Leader(),
            new Unit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(),
            new Unit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(),
            new Leader()
        ]

        this.unitList[7].baseAttack = 10
        this.unitList[7].ability = [['AttackBuff', [], 3]]
    }

    render() {
        renderHTML += '== Unit ==<br>'
        for (let i = 0; i < 14; i++) {
            let unit = this.unitList[i]
            if (unit instanceof Unit || unit instanceof Leader) {
                renderHTML += `${unit.attack}/${unit.hp}|${JSON.stringify(unit.ability)}<br>`
            } else {
                renderHTML += `==========<br>`
            }
            if (i === 6) {
                renderHTML += `== PlayerUnit ==<br>`
            }
        }
    }

    handleFrame() {
        for (let i = 0; i < 14; i++) {
            this.unitList[i].handleFrame()
        }
    }
}

class Player {
    hand = []

    constuctor() {
        this.hand = []
    }

    render() {
        renderHTML += '== Hand ==<br>'
        for (let i = 0; i < this.hand.length; i++) {
            renderHTML += `<br>`
        }
    }
}
