class Card {
    energy = []

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
            new Unit(), new Unit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(),
            new Leader()
        ]

        this.unitList[7].baseAttack = 1
        this.unitList[7].ability = [['AttackBuff', [], 4]]
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
        let tempStack = []

        for (let i = 0; i < 14; i++) {
            let unit = this.unitList[i]
            if (unit instanceof Unit || unit instanceof Leader) {
                unit.attack = unit.baseAttack
                for (let i = 0; i < unit.ability.length; i++) {
                    if (unit.ability[i][0] === 'AttackBuff') {
                        tempStack.push(JSON.parse(JSON.stringify(unit.ability[i])))
                    }
                }
            }
        }

        for (let i = 0; i < tempStack.length; i++) {
            if (tempStack[i][0] === 'AttackBuff') {
                for (let j = 7; j < 13; j++) {
                    if (this.unitList[j] instanceof Unit) {
                        this.unitList[j].attack += tempStack[i][2]
                    }
                }
            }
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
