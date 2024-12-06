const txt =`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

// - - - -

const createMatrix = (txt) => txt.split('\n').map(line => line.split(''));

const DIRECTIONS = [
    //X, Y
    [1, 0],  // right
    [-1, 0], // left
    [0, -1], // up
    [0, 1],  // down
    [1, -1], // right-up
    [1, 1],  // right-down
    [-1, -1],// left-up
    [-1, 1], // left-down
]
const findTextByDirection = (matrix, beginX, beginY, direction, text="XMAS") => {
    const nY = matrix.length;
    const nX = matrix[0].length;
    const directionX = direction[0];
    const directionY = direction[1];
    const endY = beginY + directionY * (text.length - 1);
    const endX = beginX + directionX * (text.length - 1);

    if (endY < 0 || endY >= nY || endX < 0 || endX >= nX) {
        return false;
    }

    for (let i = 0; i < text.length; i++) {
        const y = beginY + directionY * i;
        const x = beginX + directionX * i;
        if (matrix[y][x] !== text[i]) {
            return false;
        }
    }
    return true;
}

const countXMAS = (matrix) => {
    let countXmas = 0;
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] === 'X') {
                DIRECTIONS.forEach(direction => {
                    countXmas += findTextByDirection(matrix, x, y, direction) ? 1 : 0
                })
            }
        }
    }
    return countXmas;
}

console.log(countXMAS(createMatrix(txt)));