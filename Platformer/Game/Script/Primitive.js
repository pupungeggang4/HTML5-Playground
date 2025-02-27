class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    getNorm() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    normalize() {
        let norm = this.getNorm()
        return new Vector2D(this.x / norm, this.y / norm)
    }

    sub(vec) {
        return new Vector2D(this.x - vec.x, this.y - vec.y)
    }
}

class Rect2D {
    constructor(x, y, w, h) {
        this.position = new Vector2D(x, y)
        this.size = new Vector2D(w, h)
    }
}
