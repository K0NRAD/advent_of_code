const map = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`


const DIRECTIONS = [
    [0, -1], // top
    [1, 0],  // right
    [0, 1],  // bottom
    [-1, 0]  // left
];

const createMatrix = (input) => {
    return input.trim().split('\n').map(line => line.trim().split(''));
}

const findGuardStartPosition = (matrix) => {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === '^') {
                return { x, y };
            }
        }
    }
    return null;
}

const positonToKey = (x, y) => `${x}|${y}`;

const dryGuardPath = (map) => {
    const matrix = createMatrix(map)
    const nY = matrix.length;
    const nX = matrix[0].length;

    let guardPos = findGuardStartPosition(matrix);
    if (!guardPos) {
        throw new Error("Keine Startposition der Wache gefunden!");
    }

    const visited = new Set();
    let currentDir = 0; // 0=oben, 1=rechts, 2=unten, 3=links

    visited.add(positonToKey(guardPos.x, guardPos.y));

    while (true) {
        const [x, y] = [guardPos.x, guardPos.y];

        const nextX = x + DIRECTIONS[currentDir][0];
        const nextY = y + DIRECTIONS[currentDir][1];

        if (nextX < 0 || nextX >= nX || nextY < 0 || nextY >= nY) {
            break;
        }

        if (matrix[nextY][nextX] === '#') {
            currentDir = (currentDir + 1) % 4;
            continue;
        }

        matrix[guardPos.y][guardPos.x] = '@'

        guardPos.x = nextX;
        guardPos.y = nextY;

        visited.add(positonToKey(nextX, nextY));
    }

    return visited.size;
}

console.log(dryGuardPath(map))