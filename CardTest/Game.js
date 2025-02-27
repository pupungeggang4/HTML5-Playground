class Game {
    constructor() {
        player = new Player()
        field = new Field()
        this.statementStack = []
    }

    handleStack(field) {
        if (state === '') {
            if (this.statementStack.length > 0) {
                let first = this.statementStack[0]
                this.handleStatement(first)
                this.statementStack.shift()
            }
        }
    }

    handleStatement(statement) {
        if (statement[0] === 'summon') {
            if (statement[1] === 'empty') {
                console.log(1)
                for (let i = 7; i < 13; i++) {
                    if (field.unitList[i] instanceof EmptyUnit) {
                        field.unitList[i] = new Unit(statement[2])
                        break
                    }
                }
            }
        }
    }

    handleFrame() {
        field.handleFrame()
        this.handleStack(field)
    }
}
