const input = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'

const calculateCorrectMultiplications = (input) => {
    const mulMatch = /mul\((\d{1,3}),(\d{1,3})\)/g;

    let sum = 0;
    let match;

    while ((match = mulMatch.exec(input)) !== null) {
        const op1 = parseInt(match[1]);
        const op2 = parseInt(match[2]);
        const result = op1 * op2;
        sum += result;
        console.log(`Multipliziere ${op1} * ${op2} = ${result} (aktiviert)`);
    }
    return sum;
};


const calculateFixedMultiplication = (input) => {
    const mulPattern = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const doPattern = /do\(\)/g;
    const dontPattern = /don't\(\)/g;

    let sum = 0;
    let mulEnabled = true;

    while (true) {
        const mulMatch = mulPattern.exec(input);
        const doMatch = doPattern.exec(input);
        const dontMatch = dontPattern.exec(input);

        let nextIndex = Infinity;
        if (mulMatch) nextIndex = Math.min(nextIndex, mulMatch.index);
        if (doMatch) nextIndex = Math.min(nextIndex, doMatch.index);
        if (dontMatch) nextIndex = Math.min(nextIndex, dontMatch.index);

        if (nextIndex === Infinity) break;

        if (mulMatch && mulMatch.index === nextIndex) {
            if (mulEnabled) {
                const op1 = parseInt(mulMatch[1]);
                const op2 = parseInt(mulMatch[2]);
                const result = op1 * op2;
                sum += result;
                console.log(`Multipliziere ${op1} * ${op2} = ${result} (aktiviert)`);
            } else {
                console.log(`Überspringe Multiplikation (deaktiviert)`);
            }
        } else if (doMatch && doMatch.index === nextIndex) {
            mulEnabled = true;
            console.log("Multiplikationen aktiviert");
        } else if (dontMatch && dontMatch.index === nextIndex) {
            mulEnabled = false;
            console.log("Multiplikationen deaktiviert");
        }

        if (nextIndex <= mulMatch?.index || !mulMatch) mulPattern.lastIndex = nextIndex + 1;
        if (nextIndex <= doMatch?.index || !doMatch) doPattern.lastIndex = nextIndex + 1;
        if (nextIndex <= dontMatch?.index || !dontMatch) dontPattern.lastIndex = nextIndex + 1;
    }

    return sum;
}

console.log(calculateCorrectMultiplications(input));
console.log(`\nGesamtsumme: ${calculateFixedMultiplication(input)}`);
