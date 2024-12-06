const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

const createMatrix = (input) => {
    return input.split('\n').map(row => row.split(/\s+/))
}

const isSave = (row) => {
    let isUp = true;
    let isDown = true;
    for (let i = 0; i < row.length - 1; i++) {
        const numA = row[i];
        const numB = row[i + 1];
        const diff = Math.abs(numA - numB);
        
        if (diff > 3 || diff < 1) {
            return false;
        }

        if (numA < numB) isDown = false;
        if (numB < numA) isUp = false;
    }
    return isUp || isDown;
};

const evaluateRows = (matrix) => {
    let save1 = 0;
    let save2 = 0;

    matrix.forEach((row) => {
        if (isSave(row)) {
            save1++;
        } else {
            let tmpRow = row.slice();
            for (let i = 0; i <= tmpRow.length; i++) {
                tmpRow.splice(i, 1);
                if (isSave(tmpRow)) {
                    save2++;
                    break;
                }
                tmpRow = row.slice();
            }
        }
    });
    return { save1, save2: save1 + save2 };
};

const matrix = createMatrix(input);

console.log(evaluateRows(matrix));
