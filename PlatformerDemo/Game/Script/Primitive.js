class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    translate(vec) {
        this.x += vec.x
        this.y += vec.y
    }

    minus() {
        return new Vector2D(-this.x, -this.y)
    }

    add(vec) {
        return new Vector2D(this.x + vec.x, this.y + vec.y)
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

    translatedRect(vec) {
        return new Rect2D(this.position.x + vec.x, this.position.y + vec.y, this.size.x, this.size.y)
    }
}
