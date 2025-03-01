class Game {
    constructor() {
        player = new Player()
        field = new Field()
        this.statementStack = []
        this.env = {}
        this.varName = ''
    }

    handleStack(field) {
        if (state === '') {
            if (this.statementStack.length > 0) {
                let first = this.statementStack[0]
                this.handleStatement(first)
                this.statementStack.shift()
            } else {
                player.energyPay = []
            }
        }
    }

    handleStatement(statement) {
        if (statement[0] === 'summon') {
            if (statement[1] === 'empty') {
                for (let i = 7; i < 13; i++) {
                    if (field.unitList[i] instanceof EmptyUnit) {
                        field.unitList[i] = new Unit(statement[2])
                        break
                    }
                }
            } else {
                field.unitList[this.env[statement[1]]] = new Unit(statement[2])
            }
        } else if (statement[0] === 'input') {
            state = 'input'
            this.varName = statement[1]
            this.cond = statement[2]
        }
    }

    handleFrame() {
        field.handleFrame()
        this.handleStack(field)
    }
}
