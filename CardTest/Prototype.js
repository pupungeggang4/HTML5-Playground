class Card {
    type = ''
    energy = []
    attack = 0
    hp = 0
    statement = []
    description = ''

    constructor(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        this.type = data['type']
        this.energy = data['energy']
        this.statement = data['statement']
        this.description = JSON.parse(JSON.stringify(dataDescription[ID]['description']))
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

    constructor(unitInfo) {
        super()
        this.baseAttack = unitInfo[0]
        this.hp = unitInfo[1]
        this.ability = unitInfo[2]
    }
}

class Leader extends Unit {
    constructor(unitInfo) {
        super(unitInfo)
    }

    handleFrame() {

    }
}

class Field {
    unitList = []

    constructor() {
        this.unitList = [
            new Leader([0, 20, []]),
            new Unit([1, 2, []]), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(),
            new Unit([1, 2, []]), new Unit([1, 2, [['AttackBuff', [], 4]]]), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(),
            new Leader([0, 30, []])
        ]
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
    energy = []
    deck = []

    constructor() {
        this.hand = [new Card(1), new Card(1)]
    }

    playCard(index, game) {
        let statements = JSON.parse(JSON.stringify(this.hand[index].statement))
        for (let i = 0; i < statements.length; i++){
            game.statementStack.push(statements[i])
        }
        console.log(game.statementStack)
    }

    render() {
        renderHTML += '== Energy ==<br>'
        for (let i = 0; i < this.energy.length; i++) {

        }
        renderHTML += '== Hand ==<br>'
        for (let i = 0; i < this.hand.length; i++) {
            let card = this.hand[i]
            renderHTML += `${JSON.stringify(card.energy)}|${card.attack}/${card.hp}|${JSON.stringify(card.statement)}<br>`
        }
    }
}
