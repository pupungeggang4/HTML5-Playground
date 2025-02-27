function pointInsideRectUI(point, rect) {
    return point.x > rect[0] && point.x < rect[0] + rect[2] && point.y > rect[1] && point.y < rect[1] + rect[3]
}

function pointInsideRect(point, rect) {
    return point.x > rect.position.x - rect.size.x / 2 && point.x < rect.position.x + rect.size.x / 2 && point.y > rect.position.y - rect.size.y / 2 && point.y < rect.position.y + rect.size.y / 2
}

function vCollideCheck(rect1, rect2) {
    if (rect1.position.x + rect1.size.x / 2 < rect2.position.x - rect2.size.x / 2) {
        return 0
    }

    if (rect1.position.x - rect1.size.x / 2 > rect2.position.x + rect2.size.x / 2) {
        return 0
    }

    if (rect1.size.y / 2 + rect2.size.y / 2 > Math.abs(rect2.position.y - rect1.position.y)) {
        if (rect1.position.y < rect2.position.y) {
            return rect1.size.y / 2 + rect2.size.y / 2 - (rect2.position.y - rect1.position.y)
        }

        return -(rect1.size.y / 2 + rect2.size.y / 2 - (rect1.position.y - rect2.position.y))
    }
    return 0
}
