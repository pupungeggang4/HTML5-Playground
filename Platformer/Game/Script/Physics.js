function pointInsideRectUI(point, rect) {
    return point.x > rect[0] && point.x < rect[0] + rect[2] && point.y > rect[1] && point.y < rect[1] + rect[3]
}

function pointInsideRect(point, rect) {
    return point.x > rect.position.x - rect.size.x / 2 && point.x < rect.position.x + rect.size.x / 2 && point.y > rect.position.y - rect.size.y / 2 && point.y < rect.position.y + rect.size.y / 2
}
