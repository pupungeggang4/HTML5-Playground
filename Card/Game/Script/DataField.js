const dataField = {
    'home_town': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[1200, 640], 'plains_1', [80, 640], true],
        ],
        'thing': [
            {'type': 'save', 'position': [640, 640]}
        ],
        'village': true,
        'monster_spawn': [],
        'monster': []
    },

    'plains_1': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[80, 640], 'home_town', [1200, 640], true],
            [[1200, 640], 'plains_2', [80, 640], false]
        ],
        'thing': [],
        'village': false,
        'monster_spawn': [[320, 320], [960, 320], [320, 960], [960, 960]],
        'monster': [],
    },

    'plains_2': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[80, 640], 'plains_1', [1200, 640], false],
        ],
        'thing': [],
        'village': false,
        'monster_spawn': [[320, 320], [960, 320], [320, 960], [960, 960]],
        'monster': [],
    },
}
