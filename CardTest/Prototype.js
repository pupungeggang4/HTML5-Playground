class Card {
    constructor() {

    }
}

class Unit {
    attack = 0
    hp = 0

    constructor() {

    }
}

class EmptyUnit extends Unit {

}

class Leader extends Unit {
    constructor() {
        super()
        this.attack = 0
        this.hp = 30
    }
}

class Field {
    unitList = []

    constructor() {
        this.unitList = [
            new Leader(),
            new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(),
            new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(),
            new Leader()
        ]
    }

    render() {
        renderHTML += '== Unit ==<br>'
        for (let i = 0; i < 14; i++) {
            let unit = this.unitList[i]
            if (unit instanceof Unit || unit instanceof Leader) {
                renderHTML += `${unit.attack}/${unit.hp}|`
            }

            if (i == 0 || i == 3 || i == 6 || i == 9 || i == 12 || i == 13) {
                renderHTML += `<br>`
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
