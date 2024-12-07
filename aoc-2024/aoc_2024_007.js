const input = `
190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20
`;

const parseInput = (input) => {
    return input.trim().split('\n').map(line => {
        const [testValue, numbersStr] = line.split(': ');
        const numbers = numbersStr.trim().split(' ').map(Number);
        return {
            testValue: parseInt(testValue),
            numbers: numbers
        };
    });
}

const solveCalibration = (input) => {
    const equations = parseInput(input);
    let sum = 0;

    for (const eq of equations) {
        if (canSolveEquation(eq.testValue, eq.numbers)) {
            sum += eq.testValue;
        }
    }
    return sum;
}


const canSolveEquation = (target, numbers) => {
    const operatorCount = numbers.length - 1;
    const operators = ['+', '*'];

    for (let i = 0, n = Math.pow(2, operatorCount); i < n; i++) {
        const currentOperator = [];
        for (let j = 0; j < operatorCount; j++) {
            currentOperator.push(operators[(i >> j) & 1]);
        }
        if (evaluateExpression(numbers, currentOperator) === target) {
            return true;
        }
    }
    return false;
}

const evaluateExpression = (numbers, operators) => {
    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const nextNum = numbers[i + 1];
        if (operators[i] === '+') {
            result += nextNum;
        } else {
            result *= nextNum;
        }
    }
    return result;
}

const result = solveCalibration(input);
console.log(`Summe der lösbaren Testwerte: ${result}`);
