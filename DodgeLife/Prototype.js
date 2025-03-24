class Board {
    constructor() {
        this.cell = []
        for (let i = 0; i < 40; i++) {
            temp = []
            for (let j = 0; j < 64; j++) {
                temp.push(1)
            }
            this.cell.push(temp)
        }
    }

    proceed() {
        let next = JSON.parse(JSON.stringify(this.cell))
        for (let i = 0; i < 40; i++) {
            for (let j = 0; j < 64; j++) {
                let ncount = 0
                for (let k = 0; k < 8; k++) {
                    let nrow = i + neighbor[k][0]
                    let ncol = j + neighbor[k][1]
                    if (nrow >= 0 && nrow < 40 && ncol >= 0 && ncol < 64) {
                        if (this.cell[nrow][ncol] === 1) {
                            ncount += 1
                        }
                    }
                }
                if (this.cell[i][j] === 0) {
                    if (ncount === 3) {
                        next[i][j] = 1
                    } else {
                        next[i][j] = 0
                    }
                } else {
                    if (ncount != 2 && ncount != 3) {
                        next[i][j] = 0
                    } else {
                        next[i][j] = 1
                    }
                }
            }
        }
        this.cell = next
    }

    flipCell(row, col) {
        this.cell[row][col] = 1 - this.cell[row][col]
    }
}

class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Rect2D {
    constructor(x, y, w, h) {
        this.position = new Vector2D(x, y)
        this.position = new Vector2D(w, h)
    }
}