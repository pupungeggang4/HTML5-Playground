class Card {
    type = ''
    energy = []
    attack = 0
    hp = 0
    statement = []
    property = []
    description = ''

    constructor(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        this.type = data['type']
        this.energy = data['energy']
        this.statement = data['statement']
        this.property = data['property']

        if (this.type === 'unit') {
            this.attack = data['stat'][0]
            this.hp = data['stat'][1]
        }
        this.description = JSON.parse(JSON.stringify(dataDescription[ID]['description']))
    }
}

class Energy {
    energy = []
    statement = []

    constructor(ID) {
        let data = JSON.parse(JSON.stringify(dataEnergy[ID]))
        this.energy = data['energy']
        this.statement = data['statement']
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
    energyPay = []
    deck = []
    cardPlaying = []

    handMax = 8

    constructor() {
        this.hand = [new Card(1), new Card(1), new Card(2), new Card(2)]
        this.deck = [new Card(1)]
        this.energy = [new Energy(1), new Energy(1)]
    }

    drawCard(cond) {
        if (cond === '') {
            if (this.hand.length < this.handMax) {
                if (this.deck.length > 0) {
                    this.hand.push(this.deck.shift())
                }
            }
        }
    }

    payEnergy(card) {
        let eindex = 0

        for (let i = this.energy.length - 1; i >= 0; i--) {
            if (card.energy[eindex] === 'any') {
                this.energyPay.push(this.energy.splice(i, 1)[0])
                eindex += 1
            }

            if (eindex >= card.energy.length) {
                return true
            }
        }

        for (let i = this.energyPay.length - 1; i >= 0; i--) {
            this.energy.push(this.energyPay.splice(i, 1)[0])
        }

        return false
    }

    playCard(index, game) {
        if (this.payEnergy(this.hand[index])) { 
            let statements = JSON.parse(JSON.stringify(this.hand[index].statement))
            if (this.hand[index].type === 'unit') {
                game.statementStack.push(['input', 'x', 'player_empty'])
                game.statementStack.push(['summon', 'x', [this.hand[index].attack, this.hand[index].hp, [this.hand[index].property]]])
            }
            for (let i = 0; i < statements.length; i++){
                game.statementStack.push(statements[i])
            }
            this.cardPlaying.push([index, this.hand.splice(index, 1)[0]])
            game.env = {}
            console.log(game.statementStack)
        }
    }

    render() {
        renderHTML += '== Energy ==<br>'
        for (let i = 0; i < this.energy.length; i++) {
            renderHTML += `${this.energy[i].energy}<br>`
        }
        renderHTML += '== Hand ==<br>'
        for (let i = 0; i < this.hand.length; i++) {
            let card = this.hand[i]
            renderHTML += `${JSON.stringify(card.energy)}|${card.attack}/${card.hp}|${JSON.stringify(card.statement)}<br>`
        }
        renderHTML += '== Deck ==<br>'
        for (let i = 0; i < this.deck.length; i++) {
            let card = this.deck[i]
            renderHTML += `${JSON.stringify(card.energy)}|${card.attack}/${card.hp}|${JSON.stringify(card.statement)}<br>`
        }
    }
}
